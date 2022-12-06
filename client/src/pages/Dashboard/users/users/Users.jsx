import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, putUser } from "../../../../store/actions/index.js";
import TableUser from "../table/TableUser.jsx";
import swal from "sweetalert";
import s from "./Users.module.css";
import axios from "axios";
import { BACK_DOMINIO } from "../../../../config.js";

const Users = () => {
  /*const allUsers = useSelector((state) => state.users);*/
  const dispatch = useDispatch(); 

  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState([])

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(`${BACK_DOMINIO}/api/users`)
    console.log(response)
    const usersData = response.data.map((e) => {
      return {
        id: e._id,
        firstName: e.firstname,
        lastName: e.lastname,
        userName: e.username,
        email: e.email,
        country: e.country,
        telephone: e.telephone,
        role: e.roles.map((e) => e.name),
        active: e.active? "Yes":"No" ,
      };
    });
    const filterCustomer = usersData.filter((e) => e.role[0] === "user");
    setUsers(filterCustomer);

    const filterAdmin = usersData.filter((e) => e.role[0] === "admin");
    setAdmin(filterAdmin)
  }

  const handleClick = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once changed, you will not be able to change it!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const role = { roles: ["6377ae6f7f823984ff5f5f61"] };
        dispatch(putUser(id, role));
        swal("Poof! The role has been edited!", {
          icon: "success",
        });
      } else {
        swal("ERROR!");
      }
    });
  };

  const deleteUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Delete User?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const active = { active: false };
        dispatch(putUser(id, active));
        const filterUser = users.filter((u) => u.id !== id)
        setUsers(filterUser)
        swal("Poof! Delete!", {
          icon: "success",
        });
      } else {
        swal("ERROR!");
      }
    });
  };

  const deleteUserFisico = (id) => {
    swal({
      title: "Are you sure?",
      text: "delete user permanently?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`${BACK_DOMINIO}/api/users/${id}`);
        const filterUser = users.filter((u) => u.id !== id)
        setUsers(filterUser)
        swal("Poof! Delete!", {
          icon: "success",
        });
      } else {
        swal("ERROR!");
      }
    });
  };

  return (
    <div className="container_box">
      <TableUser
        users={users}
        handleClick={handleClick}
        usersAdmin={admin}
        deleteUser={deleteUser}
        deleteUserFisico={deleteUserFisico}
      />
    </div>
  );
};

export default Users;
