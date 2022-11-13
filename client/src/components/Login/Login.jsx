import React from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import usuario from "../../images/usuario.png"
import './Login.css'

export function Login(){
  const { loginWithPopup, isAuthenticated, logout } = useAuth0();

  return (
    <div>
    {isAuthenticated? 
      <div>
      {console.log(`${window.location.origin}/home`)}
      <button onClick={() => logout({ returnTo: `${window.location.origin}/home` })}>logout</button>
      <Link to="/profileUser"><img className="usuario" src={usuario} alt="usuario" /></Link>
      </div>:
      <button className="button" type="button" onClick={loginWithPopup}>Login</button>
    }
    </div>
    )
};