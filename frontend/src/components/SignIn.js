import React from "react"
import address from "../address"

const SignIn = () => {

    const [user, setUser] = React.useState(true)
    const [username, setUsername] = React.useState(``)
    const [password, setPassword] = React.useState(``)

    const submitForm = async (ev) => {
        ev.preventDefault()
        const response = await fetch(`${address}/api/signin/${user ? `pawtner` : `staff`}`, {
            method: `Post`,
            headers: {
                'Content-Type': 'application/json'
            },
            mode: `cors`,
            credentials: "include",
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })

        const responseBody = await response.json()

        if (response.status === 200) {
            console.log(`${user ? `pawtner` : `staff`} sign in success`)
        } else {
            alert(responseBody.error)
        }
    }

    return (
        <React.Fragment>
            <h1>
                Sign In Page
            </h1>
            <button onClick={() => user ? "" : setUser(!user)} style={{ opacity: user ? 1 : 0.2 }}>
                Pawtner
            </button>
            <button onClick={() => !user ? "" : setUser(!user)} style={{ opacity: !user ? 1 : 0.2 }}>
                Staff
            </button>

            <form onSubmit={submitForm}>
                <label >
                    Username:
                </label>
                <input type="text" onChange={(ev) => setUsername(ev.target.value)} />
                <br />
                <label >
                    Password:
                </label>
                <input type="text" onChange={(ev) => setPassword(ev.target.value)} />
                <br />
                <input type="submit" />
            </form>
        </React.Fragment>

    )
}


export default SignIn