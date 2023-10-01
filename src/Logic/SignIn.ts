import { getAuth, getIdToken } from "firebase/auth";

export const handleNewUser = async (idToken: string) => {
    const response = await fetch('https://api.mcsynergy.nl/auth/check-new-user', {
        method: 'POST',
        headers: {
            'authorization': idToken
        }
    })
    if (!response.ok) {
        alert("Something went wrong. Please try again. (Error: " + await response.text() + ")");
    }

    const auth = getAuth();
    await auth.currentUser?.getIdToken(true);
}