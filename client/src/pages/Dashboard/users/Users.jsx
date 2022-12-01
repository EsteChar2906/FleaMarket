import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
//import 'bootstrap/dist/css/bootstrap.min.css';  //instalar npm i reat-data-table-component styled-components bootstrap
import DataTable from 'react-data-table-component';
//instalar: npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getUsers, putUser } from '../../../store/actions/index.js'; 
import './styleUser.css';
import TableUser from './table/TableUser.jsx';
import swal from 'sweetalert';




const Users = () => {
  
  
  const allUsers = useSelector(state => state.users);
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    dispatch(getUsers());
  },[dispatch])
  
  
  let index = 0;
  const usersData = allUsers.map(e => {
    index++
    return {
      id: e._id,
      firstName: e.firstname,
      lastName: e.lastname,
      userName: e.username,
      email: e.email,
      country: e.country,
      telephone: e.telephone,
      role: e.roles.map(e => e.name),
    }
  });

  const filterCustomer = usersData.filter(e => e.role[0] === "user");
  // console.log(usersData);
  const filterAdmin = usersData.filter(e => e.role[0] === "admin");
  // console.log(filterAdmin);

  const handleClick = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once changed, you will not be able to change it!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        console.log(id)
        const role = ["6377ae6f7f823984ff5f5f61"]
        dispatch(putUser(id, role));
        swal("Poof! The role has been edited!", {
          icon: "success",
        });
      } else {
        swal("no se que poner!");
      }
    });
  }
  

  
  return (
    <div className='container_box'>
      <TableUser
        users={filterCustomer}
        handleClick={handleClick}
        usersAdmin={filterAdmin}
      />
    </div>
  )
}

export default Users