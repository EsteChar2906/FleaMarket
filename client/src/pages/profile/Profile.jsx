import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLocalStorageJSON = window.localStorage.getItem("user");
    if (userLocalStorageJSON) {
      const user = JSON.parse(userLocalStorageJSON);
      setUser(user);
    }
  }, []);

  return (
    <div>
      {user && <h1>Username: {user.username}</h1>}
      {user && <h1>Name: {user.name}</h1>}
      {user && <h1>Email: {user.email}</h1>}
      {user && <h1>Country: {user.country}</h1>}
      {user && <h1>City: {user.city}</h1>}
      {user && <h1>Role: {user.role}</h1>}
      <Link to='/'>
      <p>Back to Home</p>
      </Link>
    </div>
  );
};

export default Profile;