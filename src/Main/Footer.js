import React from 'react'
import {Container, Flex, Spacer} from '@chakra-ui/react'
export default function Footer() {
  return (
    <Container style={{marginTop:"4%"}}>
    <hr style={{ borderColor: "gray", borderWidth: "1px", marginBottom: "1rem" }} />
    <Container style={{marginTop:"3%", marginLeft:"4%"}}>
    <Flex style={{color:"white"}}>
        <h3 >Download Apps</h3>
        <img></img>
        <h3 style={{marginLeft:"50%"}}>Connect with us</h3>
        
    </Flex>
    <Flex style={{color:"grey", marginTop:"40px"}}>
        <div >About Us</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>Help Center</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>Privacy Policy</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>Terms of Use</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>Preference</div>
    </Flex>
    <Flex style={{color:"white", fontSize:"15px", marginTop:"40px"}}> 
        <h4>Popular TV Shows</h4>
        <h4 style={{marginLeft:"20px", marginRight:"10px"}}>Premium Movies</h4>
        <h4 style={{marginLeft:"20px", marginRight:"10px"}}>Popular LIVE TV Channels</h4>
        <h4 style={{marginLeft:"20px", marginRight:"10px"}}>Popular Web Series</h4>
        <h4 style={{marginLeft:"20px", marginRight:"10px"}}>Bollywood Top Celebrities</h4>
        <h4 style={{marginLeft:"20px", marginRight:"10px"}}>Games & News</h4>
    </Flex>
    <div style={{marginTop:"40px", color:"grey"}}>Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+</div>
<div style={{color:"grey"}}>Copyright © 2023 Zee Entertainment Enterprises Ltd. All rights reserved.</div>
    </Container>
    </Container>
  )
}
