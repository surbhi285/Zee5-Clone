import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const ComponentCard = ({ item, isHovered, handleHover}) => {

  async function addRemoveWatchList(movieId){
    const userInfo = localStorage.getItem("signup");
    if(userInfo){
      const userDetail = JSON.parse(userInfo);

      const response = await(fetch("https://academics.newtonschool.co/api/v1/ott/watchlist/like",
      {
          method: 'PATCH',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${userDetail.sign.token}`,
            projectId: '8jf3b15onzua'
          },
        body: JSON.stringify({ showId: movieId })
      }))
      if (response.ok) {
        console.log("Successfully added to watchlist"); 
      } else {
        console.error("Failed to add to watchlist"); 
      }
    } 
  }
  const userInfo = localStorage.getItem("signup");
  return (
    <Box
      mr={5}
      ml={5}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Button
        sx={{
          padding: "0",
          border: "1px solid black",
          cursor: "pointer",
          background: "black",
          marginLeft: "5px",
          transition: "transform 550ms",
          ":hover": {
            border: "5px solid white",
            borderRadius: "10px",
          },
        }}
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{ height: "20rem", width: "15rem", borderRadius: "10px", border: "none" }}
        />
        {isHovered && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              right: "0",
              bottom: "0",
              background: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              marginTop: "80px",
            }}
          >
            <h5 style={{ color: "#505050", textAlign: "left" }}>{item.title}</h5>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/watch/${item._id}`}>
                <Button
                  sx={{
                    color: "gray",
                    height: "30px",
                    width: "90px",
                    background: "white",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "0",
                    marginRight: "100px",
                    marginBottom: "10px",
                    padding: "0",
                  }}
                >
                  <img
                    src="https://www.pngitem.com/pimgs/m/52-520203_right-side-triangle-arrow-grey-color-pattern-hd.png"
                    style={{ width: "10px", height: "10px", marginRight: "8px" }}
                  />
                  Watch
                </Button>
              </Link>
              {userInfo && (
              <Button onClick={()=>addRemoveWatchList(item._id)}
                style={{ border: "1px solid grey", height: "30px", borderRadius: "10px", cursor: "pointer" }}
              >
                <AddIcon sx={{ fontSize: "15px", color: "grey" }} />
              </Button>
              )}
            </Box>
          </Box>
        )}
      </Button>
    </Box>
  );
};

export default ComponentCard;