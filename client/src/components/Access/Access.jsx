import React from "react";
import { Link } from "react-router-dom";
import HeadPage from "../HeadPage/HeadPage";

const access = () => {

    return(
        <div>
            <HeadPage />
            <h3>¡Ho! To enter the shopping car, log in to your account</h3>
            <Link to="/register">
                <button style={{cursor: "pointer"}}>Create account</button>
            </Link>
            <Link to="/login" >
                <button style={{cursor: "pointer"}}>Sing in</button>
            </Link>
        </div>
    )
}

export default access;