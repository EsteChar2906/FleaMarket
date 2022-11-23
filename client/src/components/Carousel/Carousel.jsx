import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.css'
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
      <div className={styles.block__carousel}>
        
        <Slider {...settings}>
          
          <div className={styles.block__carousel_img}>
            <div className={styles.block__carousel_img}>
              <img className={styles.block__carousel_img_contenido} src={fotouno} alt="" />
            </div> 
          </div >

          <div className={styles.block__carousel_img}>
            <div className={styles.block__carousel_img}>
              <img className={styles.block__carousel_img_contenido} src={fotodos} alt="" />
            </div>   
          </div >

          <div className={styles.block__carousel_img}>
            <div className={styles.block__carousel_img}>
              <img className={styles.block__carousel_img_contenido} src={fototres} alt="" />
            </div>
          </div >

        </Slider>
      </div>
    );
  }
}