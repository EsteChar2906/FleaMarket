import React, { useState } from "react";
import { shopingCar, subTotal } from '../../store/actions/index.js';
import { useDispatch } from "react-redux";

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
    <div>
      <h2>titulo: {props.title}</h2>
      <img src={props.image} alt="not found" height="300px" />
      <h4>price: {props.price}</h4>
      <button onClick={less}>-</button>
      <button>{quatity}</button>
      <button onClick={plus}>+</button>
      <h3>total: {props.price * quatity}</h3>
      <br />
      <button onClick={deletToCar}>Quit</button>
      <hr />
    </div>

  )
}

export default Card;