import React, { useState } from "react";
import { Link} from "react-router-dom";
import { Button, Box, Flex } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import shareIcon from '../Assets/shareIcon.png';
import WatchIcon from '../Assets/WatchIcon.jpg';



const ComponentCard = ({ item, isHovered, handleHover}) => {
  return (
      <div className="container">
        <div className="box">
          <Link to={`watch/${item._id}`}>
          <div className="image-container">
          <div className="image-overlay">
            <img
              src={item.thumbnail}
              alt="image.title"
              className="dataImage"
            />
           <div className="card-content">
            <div className="image-title">{item.title} 
            <br/>
            <Flex>
              <button className="watch-button"><img src={WatchIcon} style={{width: "15px", height:"15px", marginRight:"5px", marginTop:"2px" }}/>
              Watch</button>
              <div className="share-icon">
              <img src={shareIcon} alt="Share" style={{width: "20px", height:"20px" }} />
                </div>
                </Flex>
                </div>
            </div> 
          </div>
        </div>
          </Link>
          
          
        </div>
      </div>
      
  );
};

export default ComponentCard;