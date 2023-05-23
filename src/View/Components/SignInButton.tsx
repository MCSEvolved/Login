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

  const handleNewUser = async (idToken: string) => {
    await fetch('http://localhost:8000/api/auth/check-user-roles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"idtoken": idToken})
      }).then(() => {
        const app = getApp();
        const auth = getAuth(app);
        auth.currentUser?.getIdToken(true)
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
        if (getAdditionalUserInfo(result)?.isNewUser) {
          return result.user.getIdToken()
        }
      }).then(async (idToken) => {
        if (idToken) {
          await handleNewUser(idToken)
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