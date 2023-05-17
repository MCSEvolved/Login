import { getApp } from "firebase/app";
import { OAuthProvider, getAuth, signInWithPopup } from "firebase/auth"

export default function SignInForm() {
  const provider = new OAuthProvider('microsoft.com');
  provider.setCustomParameters({
    prompt: 'select_account',
    tenant: '32df73d7-fe92-47d0-9749-9d50d58e4f0c'
  });

  const app = getApp();

  function signIn() {
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result);
        const user = result.user;
        const accessToken = credential?.accessToken;
        const idToken = credential?.idToken;
        console.log(result)
    });
  }

  function signOut() {
    const auth = getAuth();
    auth.signOut().then(() => {
      console.log('signed out')
    });
  } 


  return (
    <>
      <button 
      className='bg-MCS-BlueBlack h-9 w-20 rounded-md'
      onClick={signIn}
      >
        Sign In
      </button>
      <button
        className='bg-MCS-BlueBlack h-9 w-20 rounded-md'
        onClick={signOut}
      >
        Sign out
      </button>
    </>
    

  )
}