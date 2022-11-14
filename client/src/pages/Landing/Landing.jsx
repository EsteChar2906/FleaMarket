import {Link} from 'react-router-dom';
import "./Landing.css"
import foto from "../../images/logodos.png"

import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {loadProducts, loadCategories} from '../../actions/index';

import axios from 'axios';
const endPoint = 'http://localhost:3001';

function Landing(props) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const response = await axios.get(`${endPoint}/api/products`);
    //   console.log(response.data);
    // }
    fetch(`${endPoint}/api/products`)
      .then(resp => resp.json())
      .then(data => console.log(data))
    // fetchProducts();
    dispatch(loadProducts());
    dispatch(loadCategories());
  })

  return (
    <div className='landing'>
      <header>
        <img className='logolanding' src={foto} alt="" />
        <h1 className='bienvenidos'>Bienvenidos a FleaMarkek</h1>
        <h3 className='contribuye'>¡Contribuye a la economía circular y ahorrá como loco!</h3>
      </header>
      <Link to="/home">
        <button className='botonvamos'>¡Vamos!</button>
      </Link>
    </div>
  )
}

export default Landing;