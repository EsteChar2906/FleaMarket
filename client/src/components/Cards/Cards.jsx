import axios from "axios"
import React from "react"
import { NavLink } from "react-router-dom"
import products, { product1 } from "../../testData.js"
import Card from "./Card.jsx"
import "./Cards.css"

export default () => {
    
    return (
        <div className="contenedorCards">
             {   
                    products.map((e, i) => {
                        return (<Card
                            key={i}
                            title={e.title}
                            image={e.image}
                            price={e.price}
                            
                            
                        />)
                    }) 
                    
                }

        </div>
    )
}