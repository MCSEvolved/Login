import { getAdditionalUserInfo, getAuth, signInAnonymously } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { handleNewUser } from "../../Logic/SignIn";

export default function SignInAsGuestButton() {
  const navigate = useNavigate();

  const signInAsGuest = () => {
    const auth = getAuth();
    signInAnonymously(auth)
      .then((result) => {
        return result.user.getIdToken()
      }).then(async (idToken) => {
        await handleNewUser(idToken)
        navigate('/')
      })
      .catch((error) => {
        alert("Something went wrong. Please try again. (Error: " + error.code + ")");
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
