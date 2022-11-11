import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//import { getDetail} from '../../actions'
import data, {product1} from '../../testData.js';

export  function Detail() {
  let params = useParams();
  let id = parseInt(params.id);

  // Dummy function
  const getDetail= (id) => {
    return data.find(p => p.id === id)
  }
  
  const p = getDetail(id);

  /* const dispatch = useDispatch()
    let {id} = useParams()
    const producto = useSelector((state) => state.detail)

     useEffect(()=> {
        dispatch(getDetail(id))
    },[dispatch]) */




  return (
    <> 
    Editando Detalle
      <div>        
        <img src={p.image} width="250px" height="250px"/>
      </div>
      <div>
        <a>Name: {p.title}</a>
      </div>
      <div>
        <a>Category: {p.category}</a>
      </div>      
      <div>
        <a>{p.stock}</a>
      </div>
      <div>
        <a>Description: {p.description}</a>
      </div>
      <div>
        <a>Price: {p.price}</a>
      </div>
      <div>
        <a>{p.condition}</a>
      </div>
      <div>
        <a>Rating: {p.rating.rate}</a>
      </div>
    </>
  )
}
