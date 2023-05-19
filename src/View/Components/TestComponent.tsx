import { getAuth } from "firebase/auth"
import SignOutButton from "./SignOutButton";

export default function TestComponent() {
    let auth = getAuth()
    auth.onAuthStateChanged((user) => {
        auth = getAuth()
        if (user) {
            console.log(user.email)
        } else {
            console.log("no user")
        }
    })
    const logData = async () => {
        console.log(auth.currentUser?.displayName)
    }

    return (
        <div className="absolute top-0 right-0 w-72 h-40 bg-MCS-Gray">
            test
            <SignOutButton></SignOutButton>
            <button onClick={logData}
            className="bg-MCS-Blue h-12 w-72 rounded-md font-bold"
            >get data</button>
        </div>
    )

}
