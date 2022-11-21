import { useSelector, useDispatch } from 'react-redux'
import Card from './Card.jsx'
import styles from './Cards.module.css'
import { loadProducts } from '../../store/actions/index.js'
import { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination.jsx'

const Cards = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  console.log(products)

  useEffect(() => {
    dispatch(loadProducts())
  },[])

   return (
    <div>
      <div className={styles.contenedor_cards}>
        {products.map((e, i) => {
          return (
            <Card
              key={i}
              title={e.title}
              image={e.image}
              price={e.price}
              id={e._id}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Cards