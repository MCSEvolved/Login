import { getApp } from "firebase/app";
import { OAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { redirect } from "react-router-dom";

export default function SignInButton() {

  function signIn() {
    const provider = new OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'select_account',
      tenant: '32df73d7-fe92-47d0-9749-9d50d58e4f0c'
    });

    const app = getApp();
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then(() => {
        window.location.href = '/';
      }).catch((error) => {
        alert("Something went wrong. Please try again. (Error: " + error.code + ")");
    });
  }

  return (
    <button
      className='bg-MCS-Blue h-12 w-72 rounded-md font-bold'
      onClick={signIn}
    >
      Login with Microsoft
    </button>
  )
}