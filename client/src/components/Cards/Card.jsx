import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import car from '../../assets/carrito2.png'
import { shopingCar } from '../../store/actions/index.js'

const Card = (props) => {

  const dispatch = useDispatch()

  function addToCar() {
    console.log("In SHOPPING CAR");
    dispatch(shopingCar("ADD", props.allProduct));
  }

  return (
    <div className={styles.block__card}>
      <Link to={{ pathname: `/detail/${props.id}`}}>
        <img
          className={styles.block__card_img}
          src={props.image}
          alt="not found"
        />
      </Link>
      <div className={styles.block__details}>
        <div className={styles.block__name_precio}>
          <h3 className={styles.block__card_name}>{props.title}</h3>
          <div className={styles.block__card_precio}>${props.price}</div>
        </div>
        <div className={styles.block__description}>
            <button className={styles.icon_car} type='button' onClick={addToCar}>
              <img src="https://w7.pngwing.com/pngs/380/261/png-transparent-computer-icons-shopping-cart-add-to-cart-button-text-logo-monochrome-thumbnail.png" alt="add shopping" width="30px" height="30px" />{' '}
            </button>
        </div>
      </div>
    </div>
  )
}
export default Card
