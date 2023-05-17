import { getAuth } from "firebase/auth";

export default function SignOutButton() {
  function signOut() {
    const auth = getAuth();
    auth.signOut().then(() => {
      console.log('signed out')
    });
  }

  return (
    <button
      className='bg-MCS-BlueBlack h-9 w-20 rounded-md'
      onClick={signOut}
    >
      Hey there MCS Player!
    </button>
  )
}