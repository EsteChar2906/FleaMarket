import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//import { getDetail} from '../../actions'
import data, {product1} from '../../testData.js';

export  function Detail() {

 const getDetail= () => {
    return product1
  }
    const p = getDetail()
    console.log(p)
  
 let params = useParams()
 console.log(params.id)
 
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
        <a>Name: {product1.title}</a>
      </div>
      <div>
        <a>Category: {product1.category}</a>
      </div>      
      <div>
        <a>{product1.stock}</a>
      </div>
      <div>
        <a>Description: {product1.description}</a>
      </div>
      <div>
        <a>Price: {product1.price}</a>
      </div>
      <div>
        <a>{product1.condition}</a>
      </div>
      <div>
        <a>Rating: {product1.rating.rate}</a>
      </div>
    </>
  )
}
