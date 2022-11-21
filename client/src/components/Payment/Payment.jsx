/*import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import { useDispatch } from "react-redux";
import { postFormPay } from '../../store/actions/index.js';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Validation(input){
  let error={};
  if(!input.lastName) error.lastName = "Insert last name...!"
  if(!input.firstName) error.firstName = "Insert name...!"
  if(!input.email) error.email = "Insert email...!"
  return error;
};


const Payment =()=>{
  const dispatch = useDispatch();

  const [error, setError] = useState({});
  const [price,setPrice] = useState(0);
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
            value: price,
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
  const handleChange = (e) => {
    setPrice(e.target.value);
  }

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
    <div>
      <div>
        <form action="" className="px-4 my-32 max-w-3xl mx-auto space-y-6">
          <label htmlFor="">First Name:</label>
          <input className="border border-gray-400 block py-2 px-4 w-full rounded" type="text" onChange={handleInput} value={input.firstName} name='firstName' placeholder="firstName"/>
          {error.lastName && (
            <p>{error.firstName}</p>
          )}
          <label htmlFor="">Last Name:</label>
          <input type="text" onChange={handleInput} value={input.name} name='lastName' placeholder="lastName"/>
          {error.lastName && (
            <p>{error.lastName}</p>
          )}
          <label htmlFor="">E-Mail:</label>
          <input type="text" onChange={handleInput} value={input.email} name='email' placeholder="email"/>
          {error.email && (
            <p>{error.email}</p>
          )}
          <h4>El monto es: {price}$</h4>
          {
            price === 0 ? <p>Insert total pice</p>
            : <input type="text" onChange={handleChange} placeholder='price' />
          }
        </form>
      </div>

      <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
    </div>
  )
}
export default Payment*/