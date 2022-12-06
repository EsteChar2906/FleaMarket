import React from "react"
import DataTable from "react-data-table-component"
import s from "./tabla.module.css"


const TableUser = ({handleClick,users,usersAdmin,deleteUser}) => {

  const columnas = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "LastName",
      selector: (row) => row.lastName,
      sortable: true,
      grow:2
    },
    // {
    //   name: "User Name",
    //   selector: (row) => row.userName,
    //   sortable: true,
    //   grow: 1.3
    // },
    {
      name: "Email",
      selector:(row) => row.email,
      sortable: true,
      grow: 3
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
      grow: 1.5
    },
    {
      name: "Telephone",
      selector: (row) => row.telephone,
      sortable: true,
      grow: 1.5 
    },
    {
      name: "Roles",
      selector: (row) => row.role,
      sortable: true
    },
    {
      name: "EDIT",
      grow: 0,
      cell: (row) => <button className={s.botton_edit} onClick={() => handleClick(row.id)}>Edit</button>
    },
    {
      name: "DELETE",
      grow: 0,
      cell: (row) => <button className={s.delete} onClick={() => deleteUser(row.id) }>Delete</button>
    }
  ]

  const tableAdmins = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "LastName",
      selector: (row) => row.lastName,
      sortable: true,
      grow:2
    },
    // {
    //   name: "User Name",
    //   selector: (row) => row.userName,
    //   sortable: true,
    //   grow: 1.3
    // },
    {
      name: "Email",
      selector:(row) => row.email,
      sortable: true,
      grow: 3
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
      grow: 1.5
    },
    {
      name: "Telephone",
      selector: (row) => row.telephone,
      sortable: true,
      grow: 1.5 
    },
    {
      name: "Roles",
      selector: (row) => row.role,
      sortable: true
    },
  ]

  return (
  <div className={s.container_table}>
    <DataTable
      columns={columnas}
      data={users}  
      title={"Customers"}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='200px'
    />
    <DataTable
      columns={tableAdmins}
      data={usersAdmin}  
      title={"Admins"}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='200px'
    />
    
  </div>
  )
}

export default TableUser;