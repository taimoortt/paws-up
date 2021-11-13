import React from "react"
import { useParams } from "react-router-dom"


const PawtnerHomepage = () => {

    const { username } = useParams()

    return (
        <React.Fragment>
            <h1>
                Pawtner Homepage
            </h1>
            Username is {username}
        </React.Fragment>
    )
}

export default PawtnerHomepage