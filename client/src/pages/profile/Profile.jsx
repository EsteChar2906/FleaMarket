import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { useContext } from "react";
import AuthContext from "../../context/authProvider";

const Profile = () => {
  const { user } = useAuth0();
  const { userStorage } = useContext(AuthContext);

  return (
    <div>
      <JSONPretty data={user} />
      {userStorage && <h1>Username: {userStorage.username}</h1>}
      {userStorage && <h1>Name: {userStorage.name}</h1>}
      {userStorage && <h1>Email: {userStorage.email}</h1>}
      {userStorage && <h1>Country: {userStorage.country}</h1>}
      {userStorage && <h1>City: {userStorage.city}</h1>}
      {userStorage && <h1>Role: {userStorage.role}</h1>}
      <Link to="/">
        <p>Back to Home</p>
      </Link>
    </div>
  );
};

export default Profile;
