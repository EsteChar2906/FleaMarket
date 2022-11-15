import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default (props) => {
    return (
            <div className="Card">
                <Link to={`/detail/${props.id}`}>
                    <h3 className="Card-name">{props.title}</h3>
                </Link>
                <img className="Card-img" src={props.image} alt="not found" />
                <div className="Card-contenedorprecio">
                    {props.price}
                </div>
                <div className="Card-agregar">
                    Agregar al carrito
                </div>
            </div>
    )
}
