import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { postReviews } from "../../store/actions";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

const style = {
  container: {
    display: "flex",
    flexDirection: "clumn",
    alignItems: "center",
  },
  textarea:{
    botder: "px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10
  },
  button:{
    botder: "px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10
  }

}

export default function Comment(){

  const stars = Array(5).fill(0);

  const dispatch = useDispatch();
  const reviews = useSelector(state => state.products);

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [input, setInput] = useState('');


  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se envio el feedback del cliente");
    dispatch(postReviews(input));
    setInput('');
  }
  const handleCambio = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input)
  }

  return(
    <div style={style.container}>
      <h2>Puntuacion de estrellas</h2>
      <div style={style.stars}>
        {stars.map((_, index) =>{
          return(
            <FaStar 
              key={index}
              size={24}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </div>
      <textarea onChange={(e)=> handleCambio(e)}
        placeholder="whats your feedback"
        style={style.textarea}
        value={input}
        
      />
      <button style={style.button} onClick={handleSubmit}>Submit</button>
      <hr />
      <div>
        {
          reviews.map((i, reviews) => {
            return (
              <div>
                
                <p>{reviews}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}