import React from "react";
import { shopingCar } from "../../actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

const ShopCar =()=> {

  const dispatch = useDispatch();

  const carrito = useSelector(state => state.shoping);
  console.log("carrito:", carrito)

  function reset() {
    dispatch(shopingCar("REST"));
  }

  return (
    <div>
      <p>Carrito de compras</p>
      {
        carrito.map((e, i) => {
          return (
            <div>
              <Card
                key={i}
                id={e.id}
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

