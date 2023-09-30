import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import {BsCaretRightFill} from 'react-icons/bs';
import {LuCrown} from "react-icons/lu"
import movie1 from '../Assets/movie1.png';
import movie3 from '../Assets/movie3.png';
import movie2 from '../Assets/movie2.png';
import movie4 from '../Assets/movie4.png';
import { NavLink } from 'react-router-dom';

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
      autoPlay: false,
      infinite: true,
      autoPlaySpeed: 2000,
      keyBoardControl: true,
      customTransition: "transform 500ms ease-in-out",
      removeArrowOnDeviceType: ["tablet", "mobile"],
    };

    return (
  <div className="largerCarousel" style={{marginTop:"5rem", zIndex:"0"}}>
  <Carousel {...carouselOptions}>
  <div  style={{ position: 'relative'}}>
  <img className="large-slider-img" src={movie1} alt='movie1'/>
  <button className='watchButton'>
    <BsCaretRightFill style={{paddingRight:"10px"}}/>Watch</button>
  <NavLink to="./BuyPlan" style={{textDecoration:"none", color:"white"}}>
  <button className='buyPlanbutton'>
  <LuCrown style={{paddingRight:"10px", fontSize:"25px", paddingTop:"5px"}}/>
    BUY PLAN
  </button>
  </NavLink>  
          </div>
          <div style={{ position: 'relative' }}>
            <img className="large-slider-img" src={movie2} alt="movie2" />
            <button className='watchButton' style={{marginLeft:"30px", marginTop:"28%"}}><BsCaretRightFill style={{paddingRight:"10px"}}/>Watch</button>
            <NavLink to="./BuyPlan" style={{textDecoration:"none", color:"white"}}>
         <button className='buyPlanbutton' style={{marginLeft:"150px", marginTop:"28%"}}>
       <LuCrown style={{paddingRight:"10px", fontSize:"25px", paddingTop:"5px"}}/>
         BUY PLAN
       </button>
       </NavLink>
          </div>
          <div>
            <img className="large-slider-img" src={movie3} alt="movie3" />
            <button className='watchButton' style={{marginLeft:"30px", marginTop:"28%"}}><BsCaretRightFill style={{paddingRight:"10px"}}/>Watch</button>
          <NavLink to="./BuyPlan" style={{textDecoration:"none", color:"white"}}>
         <button className='buyPlanbutton' style={{marginTop:"28%"}}>
       <LuCrown style={{paddingRight:"10px", fontSize:"25px", paddingTop:"5px"}}/>
         BUY PLAN
       </button>
       </NavLink>
          </div>
          <div>
            <img className="large-slider-img" src={movie4} alt="movie4" />
            <button className='watchButton' style={{marginLeft:"30px", marginTop:"28%"}}><BsCaretRightFill style={{paddingRight:"10px"}}/>Watch</button>
            <NavLink to="./BuyPlan" style={{textDecoration:"none", color:"white"}}>
         <button className='buyPlanbutton' style={{marginTop:"28%"}}>
       <LuCrown style={{paddingRight:"10px", fontSize:"25px", paddingTop:"5px"}}/>
         BUY PLAN
       </button>
       </NavLink>
          </div> 
        </Carousel>
      </div>
    );
  }
  
  export default LargerCarousel;