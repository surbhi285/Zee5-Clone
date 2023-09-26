import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import movie1 from '../Assets/movie1.jpg';
import movie3 from '../Assets/movie3.jpg';
import movie4 from '../Assets/movie4.jpg';
import movie5 from '../Assets/movie5.jpg';
import movie2 from '../Assets/movie2.avif';

const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  function LargerCarousel() {
    const carouselOptions = {
      responsive: responsive,
      autoPlay: true,
      infinite: true,
      autoPlaySpeed: 2000,
      keyBoardControl: true,
      customTransition: "transform 500ms ease-in-out",
      removeArrowOnDeviceType: ["tablet", "mobile"],
    };
  
    return (
      <div className="largerCarousel" style={{marginTop:"5rem"}}>
        <Carousel {...carouselOptions}>
          <div>
            <img className="large-slider-img" src={movie2} alt="movie2" />
          </div>
          <div>
            <img className="large-slider-img" src={movie3} alt="movie2" />
          </div>
          <div>
            <img className="large-slider-img" src={movie4} alt="movie3" />
          </div>
          <div>
            <img className="large-slider-img" src={movie5} alt="movie4" />
          </div> 
        </Carousel>
      </div>
    );
  }
  
  export default LargerCarousel;