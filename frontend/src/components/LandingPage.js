import React from "react"
import { useNavigate } from "react-router-dom"

const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <h1>
                Landing Page
            </h1>
            <button onClick={() => navigate("/signin")}>
                Sign In
            </button>
            <button onClick={() => navigate("/signup")}>
                Sign Up
            </button>
        </React.Fragment>
    )
}


export default LandingPage