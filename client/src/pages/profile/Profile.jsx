import React from 'react'
import { useEffect, useState } from "react";


const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLocalStorageJSON = window.localStorage.getItem("user");
    if (userLocalStorageJSON) {
      const user = JSON.parse(userLocalStorageJSON);
      setUser(user);
    }
  }, []);

  console.log(user)

  return (
    <div>Profile</div>
  )
}

export default Profile