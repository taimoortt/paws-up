import React from "react"
import { useNavigate } from "react-router-dom"
import address from "../address"

const SignInAdmin = () => {

    const [username, setUsername] = React.useState(``)
    const [password, setPassword] = React.useState(``)

    const navigate = useNavigate()

    const submitForm = async (ev) => {
        ev.preventDefault()

        if (username === `` || password === ``) {
            alert(`Username and password cannot be empty.`)
            return
        }

        const response = await fetch(`${address}/api/signin/admin`, {
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
            console.log(`Admin sign in success`)
            navigate(`/adminhomepage/${username}`)
        } else {
            alert(responseBody.error)
        }
    }

    return (
        <React.Fragment>
            <h1>
                Admin Sign In Page
            </h1>

            <form onSubmit={submitForm}>
                <label >
                    Username:
                </label>
                <input type="text" onChange={(ev) => setUsername(ev.target.value)} />
                <br />
                <label >
                    Password:
                </label>
                <input type="password" onChange={(ev) => setPassword(ev.target.value)} />
                <br />
                <input type="submit" />
            </form>
        </React.Fragment>
    )
}

export default SignInAdmin