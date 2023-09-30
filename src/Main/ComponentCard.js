import React, { useState } from "react";
import { Link} from "react-router-dom";
import { Button, Box, Flex } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {PiShareFat} from 'react-icons/pi';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShareButton from "./ShareButton";




const ComponentCard = ({ item}) => {

  const share = ()=>{

  }
  return (
      <div className="container">
        <div className="box">
        
          <div className="image-container">
          <div className="image-overlay">
          <Link to={`watch/${item._id}`} style={{textDecoration:"none"}}>
            <img
              src={item.thumbnail}
              alt="image.title"
              className="dataImage"
            />
            </Link>
           <div className="card-content">
            <div className="image-title">{item.title} 
            <br/>
            <Flex>
            <Link to={`watch/${item._id}`} style={{textDecoration:"none"}}>
              <div className="watch-button">
              <PlayArrowIcon className="arrowIcon"/>
              <div style={{marginLeft:"2px", paddingTop:"2px", fontSize:"15px", fontWeight:"normal", 
              textDecoration:"none"}}> Watch</div>
              </div>
              </Link>
              <div className="share-icon"style={{border:"none"}}>
              <ShareButton/>
                </div>
                </Flex>
                </div>
            </div> 
          </div>
        </div>
        
          
          
        </div>
      </div>
      
  );
};

export default ComponentCard;