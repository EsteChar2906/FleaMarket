import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
import tele from "../../img/telesi.jpeg"
import fotouno from "../../img/fotouno.jpg"
import fotodos from "../../img/fotodos.jpg"
import fototres from "../../img/fototres.jpg"

export default class Carousel extends Component {
    
    
  
  
    render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      className:"carousel"
      

    };
    return (
      <div >
        
        <Slider {...settings}>
          <div className="carousel-img">
            <div className="carousel-img-contenido">
                <img  src={fotouno} alt="" />
            </div>
            
          </div >
          <div className="carousel-img">
            <div className="carousel-img-contenido">
                <img  src={fotodos} alt="" />
            </div>
          </div>
          <div className="carousel-img">
              <div className="carousel-img-contenido">
                <img src={fototres} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}