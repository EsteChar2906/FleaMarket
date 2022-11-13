import React from "react";
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";


export default function Profile(){

	const { user, isAuthenticated, logout } = useAuth0();

	return (
		<div>
		{
			isAuthenticated ? 
			<div>
			Profile

			<img src={user.picture} alt="" />
			<button onClick={logout}>Logout</button>
			<JSONPretty data={user} />
			</div> :
			<h4>Por favor inicie seccion o registrese</h4>
		}
		<Link to="/home">Home</Link>
		</div>
		)
};