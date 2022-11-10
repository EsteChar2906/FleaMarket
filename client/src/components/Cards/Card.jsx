import axios from "axios"
import React from "react"
import { NavLink } from "react-router-dom"
import products, { product1 } from "../../testData.js"
import "./Card.css"

export default (props) => {
    
    
    return (
        
            <div className="Card">

                <h3 className="Card-name">{props.title}</h3>
                <img className="Card-img" src={props.image} alt="not found" />
                
                <div className="Card-contenedorprecio">
                    
                    {props.price}
                   
                </div>
            </div>
        
    )
}
