import React from 'react'
import  ReactDOM  from "react-dom";
import { useDispatch } from "react-redux";
import { postFormPay } from '../../store/actions/index.js';
import { useState } from "react";
import s from "./estiloPay.css";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Validation(input){
  let error={};
  if(!input.lastName) error.lastName = "Enter last name...!"
  if(!input.firstName) error.firstName = "Enter name...!"
  if(!input.email) error.email = "Enter email...!"
  return error;
};


function Payment( props ){
  const dispatch = useDispatch();

  const [error, setError] = useState({});
  const [input, setInput] = useState({
    lastName: '',
    firstName: '',
    email: '',
  });
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
  const onApprove = (data, actions) => {
    dispatch(postFormPay(input));
    console.log(data);
    return actions.order.capture(alert("El pago ha si exioto"));
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
            {error.lastName && (
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
        <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
      </form>
      
    </div>
  )
}

export default Payment

