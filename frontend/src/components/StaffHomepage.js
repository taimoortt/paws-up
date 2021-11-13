import React from "react"
import { useParams } from "react-router-dom"

const StaffHomepage = () => {

    const { username } = useParams()

    return (
        <React.Fragment>
            <h1>
                Staff Homepage
            </h1>
            Username is {username}
        </React.Fragment>
    )
}

export default StaffHomepage