import axios from "axios"
import React, {useEffect} from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
// import products, { product1 } from "../../testData.js"
import Card from "./Card.jsx"
import "./Cards.css"

export default () => {
    const products = useSelector(state => state.products);
    
    return (
        <div className="contenedorCards">
             {   
                    products.map((e, i) => {
                        return (<Card
                            key={i}
                            title={e.title}
                            image={e.image}
                            price={e.price}
                            id={e.id}
                            
                        />)
                    }) 
                    
                }

        </div>
    )
}