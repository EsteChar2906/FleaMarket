import React, { useEffect, useState } from "react";
import { shopingCar, subTotal } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Payment from "../../components/Payment/Payment.jsx";
import HeadPage from "../../components/HeadPage/HeadPage";
import styles from './ShoppingCard.module.css'

const ShopingCard = () => {
  const dispatch = useDispatch();

  const carrito = useSelector((state) => state.shoping);
  console.log("carrito:", carrito);

  function reset() {
    dispatch(shopingCar("REST"), subTotal("REST"));
  }

  const subTot = useSelector((state) => state.subTotal);
  console.log("pagar:", subTot);

  if (carrito.length > 0) {
    const prices = carrito.map((e) => e.price);
    var total = prices.reduce((a, b) => a + b, 0);
  }

  useEffect(() => {
    if (carrito.length > 0) dispatch(subTotal("Add", total));
  }, [carrito.length, total, dispatch]);

  const [suiche, setSuiche] = useState(false);
  function pago() {
    if (suiche === false) setSuiche(true);
  }

  return (
    <div>
      <HeadPage />
      <div className={styles.block__shoping}>
        <div className={styles.block__shopingcontenedor}>
          <div className={styles.block__shopingcontenedoruno}>
            <h3>Carrito de compras</h3>
            
          </div>
          <div className={styles.block__profile_contendordosdiv}  ></div>

          <div className={styles.block__shopingcontenedordos}>
            {carrito.length === 0 && <p>Sin Productos</p>}
              {carrito &&
                carrito.map((e, i) => {
                  return  (
                    <div className={styles.block__shopingcontendortres} key={i}>
                      
                      <Card
                       
                        id={e._id}
                        title={e.title}
                        image={e.image}
                        price={e.price}
                      />
                      
                    </div>
                  );
                })}

              
              
              
              
              
              {suiche && <Payment price={subTot} />}

          </div>
          <div className={styles.block__profile_contendordosdiv}  ></div>
          

          <div className={styles.block__shopingcontenedorseis}>
            {carrito.length > 0 && <button onClick={reset}>Reset carrito</button>}
            <button  onClick={pago}>PAGAR</button>

          </div>
          
        </div>
        
          
      </div>
      
    </div>
  );
};

export default ShopingCard;
