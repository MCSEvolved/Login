import { getAuth, signInAnonymously } from "firebase/auth";
import { handleNewUser } from "../../Logic/SignIn";

export default function SignInAsGuestButton() {

  const signInAsGuest = () => {
    const auth = getAuth();
    signInAnonymously(auth)
      .then((result) => {
        return result.user.getIdToken()
      }).then(async (idToken) => {
        await handleNewUser(idToken)
        const urlParams = new URLSearchParams(window.location.search)
        let redirect = urlParams.get("redirect")
        redirect = redirect ? redirect : ''
        //@ts-ignore
        window.location = `/${redirect}`
      })
      .catch((error) => {
        alert("Something went wrong. Please try again. (Error: " + error.code + ")");
        console.log(error);
      });
  };

  return (
    <>
      <button
        className=' bg-MCS-Grey h-12 w-72 mt-4 rounded-md font-bold'
        onClick={signInAsGuest}
      >
        Continue as guest
      </button>
    </>
  )
}
