import React from 'react'
import {CiFaceFrown} from 'react-icons/ci';
import { Flex, Container } from '@chakra-ui/react';
import ProfileItem from './ProfileItem';


export default function Rental() {
  return (
    <Flex style={{marginTop:"7rem", marginLeft:"5rem", border:"1px solid grey", width:"70rem"}}>
     <Container style={{ width: "20rem", flex: "0 0 10rem"}}>
        <ProfileItem />
          </Container>
    <Flex style={{flexDirection:"column"}}>
    <h1 style={{color: "white", height:"30px", width:"40%", padding:"10px", paddingLeft:"40px"}}>My Rentals</h1>
        <hr className="divider" />
   
    <div style={{width:"50rem", height:"auto", marginLeft:"0"}}>
    <CiFaceFrown style={{color:"grey", fontSize:"200px", paddingTop:"50px", paddingLeft:"42%" }}/>
   <div style={{color:"white", fontSize:"50px", paddingLeft:"30%", fontSize:"25px"}}>You have not rented any content yet</div>
   <div style={{color:"white", fontSize:"50px", paddingLeft:"20%", fontSize:"25px"}}>Rent from our<span style={{color:"purple"}}>ZEEPLEX Collection</span> and start watching</div> 
   
  </div>
  </Flex>
  
  </Flex>
  )
}

