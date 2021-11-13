import React from "react"
import { useParams } from "react-router-dom"

const AdminHomepage = () => {

    const { username } = useParams()

    return (
        <React.Fragment>
            <h1>
                Admin Homepage
            </h1>
            Username is {username}
        </React.Fragment>
    )
}

export default AdminHomepage