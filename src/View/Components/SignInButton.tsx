import { getApp } from "firebase/app";
import { OAuthProvider, browserLocalPersistence, getAdditionalUserInfo, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignInButton() {
  
  const saveAccessTokenInLocalStorage = (accessToken: string | undefined) => {
    if (!accessToken) {
      return;
    }
    localStorage.setItem('accessToken', accessToken);
  }

  const handleNewUser = (idToken: string) => {
    fetch('http://localhost:8000/api/auth/check-new-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"idtoken": idToken})
      }).then(() => {
        const app = getApp();
        const auth = getAuth(app);
        auth.currentUser?.getIdToken()
      }
    )
  }

  const navigate = useNavigate();

  const signIn = () => {
    const provider = new OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    const app = getApp();
    const auth = getAuth(app);

    auth.setPersistence(browserLocalPersistence);

    signInWithPopup(auth, provider)
      .then((result) => {
        saveAccessTokenInLocalStorage(OAuthProvider.credentialFromResult(result)?.accessToken);
        console.log(result)
        console.log(getAdditionalUserInfo(result))
        return result.user.getIdToken()
        if (getAdditionalUserInfo(result)?.isNewUser) {
        }
      }).then((idToken) => {
        if (idToken) {
          handleNewUser(idToken)
        }
        navigate('/')
      })
      .catch((error) => {
        alert("Something went wrong. Please try again. (Error: " + error.code + ")");
    });
  };

  return (
    <button
      className='bg-MCS-Blue h-12 w-72 rounded-md font-bold'
      onClick={signIn}
    >
      Login with Microsoft
    </button>
  )
}