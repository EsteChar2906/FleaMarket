import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default (props) => {
  return (
    <div className="block__card">
      <Link to={`/detail/${props.id}`}>
        <img className="block__card-img" src={props.image} alt="not found" />
      </Link>
      <div className="block__details">
        <div className="block__name-precio">
          <h3 className="block__card-name">{props.title}</h3>
          <div className="block__card-precio">${props.price}</div>
        </div>
        <div className="block__description">
          <div className="block__card-agregar">IconoCAr</div>
        </div>
      </div>
    </div>
  )
}
