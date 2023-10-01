import React, { useState, useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import {BsCaretRightFill} from 'react-icons/bs';
import {LuCrown} from "react-icons/lu"
import movie1 from '../Assets/movie1.webp';
import movie3 from '../Assets/movie3.webp';
import movie2 from '../Assets/movie2.webp';
import movie4 from '../Assets/movie4.webp';
import { NavLink } from 'react-router-dom';

const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  function LargerCarousel() {

  // const [smallerScreen,  setIsSmallScreen] = useState(window.innerWidth < 1250);

    const carouselOptions = {
      responsive: responsive,
      autoPlay: false,
      infinite: true,
      autoPlaySpeed: 2000,
      keyBoardControl: true,
      customTransition: "transform 500ms ease-in-out",
      removeArrowOnDeviceType: ["tablet", "mobile"],
    };

    // useEffect(()=>{
    //   const handleResize = () => {
    //     setIsSmallScreen(window.innerWidth < 1250);
    //   };
    //   window.addEventListener("resize", handleResize);
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // },[])
     

    return (
  <>
  <div className="largerCarousel" style={{marginTop:"5rem", zIndex:"0"}}>
  <Carousel {...carouselOptions}>
  <div  style={{ position: 'relative'}}>
  <img className="large-slider-img" src={movie1} alt='movie1'/>
  <NavLink to="/watch/64cffee700bad552e8dcd533">
  <button className='watchButton'>
    <BsCaretRightFill style={{paddingRight:"10px"}}/>Watch</button>
    </NavLink>
  </div>

    <div style={{ position: 'relative' }}>
    <img className="large-slider-img" src={movie2} alt="movie2" />
    <NavLink to="/watch/64cffee700bad552e8dcd52f">
    <button className='watchButton' style={{marginLeft:"30px", marginTop:"28%"}}><BsCaretRightFill style={{paddingRight:"10px"}}/>Watch</button>
    </NavLink>
    </div>

    <div>
    <img className="large-slider-img" src={movie3} alt="movie3" />
    <NavLink to="/watch/64cffee700bad552e8dcd515">
    <button className='watchButton' style={{marginLeft:"30px", marginTop:"28%"}}><BsCaretRightFill style={{paddingRight:"10px"}}/>Watch</button>
    </NavLink>
    </div>
          
    <div>
    <img className="large-slider-img" src={movie4} alt="movie4" />
    <NavLink to="/watch/64cffee700bad552e8dcd50d">
    <button className='watchButton' style={{marginLeft:"30px", marginTop:"28%"}}><BsCaretRightFill style={{paddingRight:"10px"}}/>Watch</button>
    </NavLink>
    </div> 
        </Carousel>
      </div>

      </>
    );
  }
  
  export default LargerCarousel;