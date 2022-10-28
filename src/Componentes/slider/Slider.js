import React from "react";
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
        <div className="carousel-tittle">
            <h2>Mis proyectos</h2>
        </div>
    
        <Carousel
            slidesPerPage ={3}
            infinite
            animationSpeed={200}
            centered
            offset={25}
            slides={Slides}
            breakpoints = {{
              960: {
                slidesPerPage: 1,
                itemWidth:250,
                arrows:true,
              }
            }}
            plugins={[
              {
                resolve: arrowsPlugin,
              }
            ]}
            
        />
    </div>
  )
}

export default Slider;