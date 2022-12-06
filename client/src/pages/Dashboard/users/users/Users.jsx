import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, putUser } from "../../../../store/actions/index.js";
import TableUser from "../table/TableUser.jsx";
import swal from "sweetalert";
import s from "./Users.module.css";
import axios from "axios";
import { BACK_DOMINIO } from "../../../../config.js";

const Users = () => {
  const allUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  let index = 0;
  const usersData = allUsers.map((e) => {
    index++;
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
  // console.log(usersData);
  const filterAdmin = usersData.filter((e) => e.role[0] === "admin");
  // console.log(filterAdmin);

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
        dispatch(getUsers())
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
        dispatch(getUsers())
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
        users={filterCustomer}
        handleClick={handleClick}
        usersAdmin={filterAdmin}
        deleteUser={deleteUser}
        deleteUserFisico={deleteUserFisico}
      />
    </div>
  );
};

export default Users;
