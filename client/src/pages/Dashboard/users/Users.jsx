import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';  //instalar npm i reat-data-table-component styled-components bootstrap
import DataTable from 'react-data-table-component';
//instalar: npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getUsers } from '../../../store/actions/index.js'; 
import './styleUser.css';

const columnas = [
  {
    name: "Id",
    selector: "id",
    sortable: true
  },
  {
    name: "First Name",
    selector: "firstName",
    sortable: true,
    //grow: 3 //incrementar el tamaño 
  },
  {
    name: "LastName",
    selector: "lastName",
    sortable: true
  },
  {
    name: "User Name",
    selector: "userName",
    sortable: true
  },
  {
    name: "Email",
    selector:"email",
    sortable: true
  },
  {
    name: "Country",
    selector: "country",
    sortable: true,
    //right: true // colocar en la derecha
  },
  {
    name: "Telephone",
    selector: "telephone",
    sortable: true
  },
]


const Users = () => {
  
  
  const allUsers = useSelector(state => state.users);
  
  const [input, setInput] = useState('');
  const [user, setUser] = useState([]);
  const dispatch = useDispatch()
  
  useEffect(() => {
    // createIndex()
    dispatch(getUsers());
    setUser(usersData)
  },[dispatch])
  
  let index = 0;
  const usersData = allUsers.map(e => {
    index++
    return {
      id: index,
      firstName: e.firstname,
      lastName: e.lastname,
      userName: e.username,
      email: e.email,
      country: e.country,
      telephone: e.telephone
    }
  });
  
  
  

  // const filterName = () => {
  //   let search = usersData.filter(e => {
  //     if(e.firstName.includes(input)){
  //       return e ;
  //     }
  //   });
  //   if(!input){
  //     dispatch(getUsers())
  //   }else{
  //     setUser(search);
  //   }
  // };

  const handleChange = (e) => {
    
    setInput(e.target.value)
    console.log(input)
    if(!input) {
      setUser(usersData);
    }
  };
  const handleClick = () => {
    if(!input){
      setUser(usersData)
    }else{
      var search = usersData.filter(e => {
        if(e.firstName.includes(input)){
          setUser(e)
        }
      });
      
    }
  }

  // const createIndex = () => {
  //   var contador = 1;
  //   usersData.map(e => {
  //     e['id']=contador;
  //     contador++;
  //   })
  // }
  

  return (
    <div className='table-responsive'>
      <div className='barraSearch'>
      <input 
        type="text"
        placeholder='Search'
        className='textField'
        value={input}
        onChange={handleChange}
      />
      <button className='btnSearch' onClick={handleClick}>
        {' '}
        <FontAwesomeIcon icon={faSearch} />
      </button>
      </div>
      <DataTable
        columns={columnas}
        data={usersData}
        title={"Custromers"}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='600px'
      />
    </div>
  )
}

export default Users