import axios from "axios"
import React, {useEffect} from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
// import products, { product1 } from "../../testData.js"
import Card from "./Card.jsx"
import "./Cards.css"

export default () => {
    const products = useSelector(state => state.products);
    const filtered = useSelector(state => state.filtered);

    const productsToShow = filtered.length === 0 ? products : filtered;
    
    return (
        <div className="contenedorCards">
             {   
                    productsToShow.map((e, i) => {
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