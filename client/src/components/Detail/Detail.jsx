import React from "react";
import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'


export default function Detail(){
   /*  const dispatch = useDispatch()
    let {id} = useParams()
    const producto = useSelector((state) => state.detail)
    console.log(producto) */

  /*   useEffect(()=> {
        dispatch(getDetail(id))
    },[dispatch]) */

    return(
        <div>
            <img className="img-Detail" src={producto.image} />
        </div>
    )
}