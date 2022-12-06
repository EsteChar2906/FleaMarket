import React from "react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import styles from './Table.module.css'


const Table = ({products, deleteProduct,setProductEdit,openModal2}) => {

  // const [search, setSearch] = useState('')

  // const [fiteredProducts, setFiteredProducts] = useState([])
  
  // setFiteredProducts(products)

//   useEffect(() => {
//  const result = products.filter(p=>{
//   return p.title.toLowerCase().match(search.toLowerCase())
//  })
//  setFiteredProducts(result)
//   }, [search])
  

  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
      grow: 0,
    },
    {
      name: "NOMBRE",
      selector: (row) => row.title,
      sortable: true,
      grow: 0.5,
    },
    {
      name: "IMAGEN",
      selector: (row) => row.image.secure_url,
      grow: 0,
      cell: (row) => (
        <img height="60px" width="56px" alt={row.name} src={row.image.secure_url} />
      ),
    },
    {
      name: "PRECIO",
      selector: (row) => row.price,
      sortable: true,
      grow: 0,
    },
  
    {
      name: "RATING",
      selector: (row) => row.rating,
      sortable: true,
      grow: 0,
    },
  
    {
      name: "CATEGORIA",
      selector: (row) => row.category.name,
      sortable: true,
      grow: 0,
    },
  
    {
      name: "STOCK",
      selector: (row) => row.stock,
      sortable: true,
      grow: 0,
    },
  
    {
      name: "CONDICION",
      selector: (row) => row.condition,
      sortable: true,
      grow: 0,
    },
  
    {
      name: "BRAND",
      selector: (row) => row.brand,
      sortable: true,
      grow: 0,
    },
    {
      name: "DESCRIPCION",
      selector: (row) => row.description,
      grow: 0,
      sortable: true,
    },

    {
      name: "UPDATE",
      grow: 0,
      cell: (row) => <button className={styles.update} onClick={()=>{
        const selecRow = setProductEdit(row)
        const open = openModal2()
        selecRow()
        open()
      } } >UPDATE</button>
    },

    {
      name: "DELETE",
      grow: 0,
      cell: (row) => <button className={styles.delete} onClick={()=>deleteProduct(row._id)} >DELETE</button>
    },
  ];


  return (
    <>
      <DataTable
        columns={columns}
        data={products}
        title="Lista de productos en FleaMarket"
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        highlightOnHover
        // subHeader
        // subHeaderComponent={
        //   <input
        //   type ='text'
        //   placeholder="Search"
        //   value={'search'}
        //   onChange={(e)=>setSearch(e.target.value)}
        //   />
          
        // }
      />
    </>
  );
};

export default Table;