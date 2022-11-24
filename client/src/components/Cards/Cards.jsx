import { useSelector, useDispatch } from 'react-redux'
import Card from './Card.jsx'
import styles from './Cards.module.css'
import { loadProducts, loadProduct } from '../../store/actions/index.js'
import { useEffect} from 'react'

const Cards = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  useEffect(() => { dispatch(loadProduct()) }, [])

  useEffect(() => {
    dispatch(loadProducts())
  },[])

   return (
    <div className={styles.contenedor_cardscero}>
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