import React from 'react'
import  ReactDOM  from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { postFormPay } from '../../store/actions/index.js';
import { useState } from "react";
import s from "./estiloPay.css";
import { Validation } from '../../Helpers/Validations.js';
import { useEffect } from 'react';
import swal from 'sweetalert'; //npm i sweetalert 
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Payment( props ){

  const dispatch = useDispatch();

  const productsCarrito = useSelector((state) => state.shoping);
  // let sales;
  // const sumSales = () => {

  // }
  console.log(productsCarrito)
  const [error, setError] = useState({});
  
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // let totalPrice = props.price
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: props.price,
          },
        },
      ],
    });
  };

  let prices = props.price;

  const onApprove = (data, actions) => {
    console.log(prices, productsCarrito)
    dispatch(postFormPay({input, data, productsCarrito, prices}));
    localStorage.setItem("total_price", props.price);
    return actions.order.capture(swal({
      title:"Payment",
      text: "Tha Payment has been successfully",
      icon: "success",
      button: "Ok"
    }));
  };
  

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setError(Validation({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
  return(
    <div className='body'>
      <form  className="form">
        <h2 className='form_title'>Enter Your Data: </h2>
        <h4 className='form_paragraph'>Total Price: {props.price}$</h4>

        <div className='form_container'>
          <div className='form_group'>
            <input className="form_input" type="text" onChange={handleInput} value={input.firstName} name='firstName' placeholder=" "/>
            <label className='form_label'>First Name:</label>
            <span className='form_line'></span>
            {error.firstName && (
              <p className='form_error'>{error.firstName}</p>
            )}
          </div>

          <div className='form_group'>
            <input className="form_input" type="text" onChange={handleInput} value={input.name} name='lastName' placeholder=" "/>
            <label className='form_label'>Last Name:</label>
            <span className='form_line'></span>
            {error.lastName && (
              <p className='form_error'>{error.lastName}</p>
              )}
          </div>

          <div className='form_group'>
            <input className="form_input" type="text" onChange={handleInput} value={input.email} name='email' placeholder=" "/>
            <label className='form_label' >E-Mail:</label>
            <span className='form_line'></span>
            {error.email && (
              <p className='form_error'>{error.email}</p>
              )}
          </div>
        </div>
        <br />
        {
          input.lastName && input.firstName && input.email ? 
          <PayPalButton disabled={ Object.keys(error).length<1 ? false : true}
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
          />
          : <div></div>
        }
      </form>
      
    </div>
  )
}

export default Payment

