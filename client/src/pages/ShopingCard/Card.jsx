import React, { useState } from "react";
import { shopingCar, subTotal } from '../../store/actions/index.js';
import { useDispatch } from "react-redux";
import styles from './Card.module.css'

const Card = (props) => {

  const [quatity, setQuantity] = useState(1);

  const dispatch = useDispatch()

  function deletToCar() {
    dispatch(shopingCar("DEL", props.id))
  }

  function plus() {
    setQuantity(quatity + 1)
    dispatch(subTotal("plus", props.price))
  }

  function less() {
    if (quatity === 1) return setQuantity(1)
    return (
      setQuantity(quatity - 1),
      dispatch(subTotal("less", props.price))
    )
  }

  return (
    
    <div className={styles.block__shopingcontendortres}>
      
      <div className={styles.block__shopingcontendorcuatro}>
        
        <img src={props.image} alt="not found" height="170px" />
        <div>
        <h2> {props.title}</h2>
        <button styles={{ outline: `none`}} onClick={deletToCar}>Delete</button>

        </div>
        

      </div>
      
      <div className={styles.block__shopingcontendorcinco}>
        <button  styles={{ outline: "none"}}  onClick={less}>-</button>
        <button  styles={{ outline: "none"}} >{quatity}</button>
        <button  styles={{ outline: "none"}} onClick={plus}>+</button>

      </div>
      

      <h3 className={styles.block__shopingprecio}>${props.price * quatity}</h3>

      
    </div>

  )
}

export default Card;