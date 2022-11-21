import React from "react";
import { shopingCar } from '../../store/actions/index.js';
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

const ShopingCard =()=> {

  const dispatch = useDispatch();

  const carrito = useSelector(state => state.shoping);
  console.log("carrito:", carrito)

  function reset() {
    dispatch(shopingCar("REST"));
  }

  return (
    <div>
      <h3>Carrito de compras</h3>

      { carrito.length === 0 && <p>Sin Productos</p> }

      {
        carrito.map((e, i) => {
          return (
            <div key={i}>
              <Card
                id={e._id}
                title={e.title}
                image={e.image}
                price={e.price}
              />
              <button onClick={reset}>Reset carrito</button>
            </div>

          )
        })
      }
    </div>
  );
};

export default ShopingCard

