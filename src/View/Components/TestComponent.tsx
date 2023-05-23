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

    const getRoles = async () => {
        const idToken = await auth.currentUser?.getIdToken()
        const response = await fetch('http://localhost:8000/api/auth/get-user-claims/' + idToken, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
        })
        const roles = await response.json()
        console.log(roles)
        console.log("--------------------")
        console.log(auth.currentUser?.toJSON())
        console.log("--------------------")
        console.log(await auth.currentUser?.getIdTokenResult())
    }

    return (
        <div className="absolute top-0 right-0 w-72 h-40 bg-MCS-Gray">
            test
            <SignOutButton></SignOutButton>
            <button onClick={logData}
            className="bg-MCS-Blue h-12 w-72 rounded-md font-bold"
            >get data</button>
            <button onClick={getRoles}
                className="bg-MCS-Blue h-12 w-72 mt-2 rounded-md font-bold"
            >get role</button>
        </div>
    )

}
