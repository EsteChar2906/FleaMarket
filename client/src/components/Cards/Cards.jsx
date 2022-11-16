import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import Card from "./Card.jsx"
import "./Cards.css"
import {loadProducts} from "../../actions/index.js"

export default () => {
    const products = useSelector(state => state.products);
    const filtered = useSelector(state => state.filtered);

    const productsToShow = filtered.length === 0 ? products : filtered;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts())
    },[])
    
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