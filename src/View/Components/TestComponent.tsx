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
        const idToken = await auth.currentUser?.getIdToken(true)
        if (!idToken) {
            console.log("no idToken")
            return
        }
        const response = await fetch('https://api.mcsynergy.nl/auth/get-user-claims', {
            method: 'GET',
            headers: {
                'authorization': idToken
            }
        })
        if (response.ok) {
            const data = await response.json()
            console.log("role: " + data.role)
        }
        else {
            console.log("response code:" + response.status)
            console.log(await response.text())
        }
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
