import React from 'react'
import {Container, Flex, Spacer} from '@chakra-ui/react'
export default function Footer() {
  return (
    <Container style={{marginTop:"4%"}}>
    <hr style={{ borderColor: "gray", borderWidth: "1px", marginBottom: "1rem" }} />
    <Container style={{marginTop:"3%", marginLeft:"4%"}}>
    <Flex style={{color:"white"}}>
        <h3 >Download Apps</h3>
        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="googleplaystore" style={{width:"100px", height:"40px", marginTop:"10px", marginLeft:"5px"}}/>
        <h3 style={{marginLeft:"45%"}}>Connect with us</h3>
        <img src="https://i.pinimg.com/originals/63/42/e0/6342e06ac7fbcef4595e6978b791beb5.jpg" alt="facebook" style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%"}}/>
        <img src="https://i.pinimg.com/736x/a0/a6/66/a0a66670e75807e529358cb88a5972df.jpg" alt="instagram" style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%"}}/>
        <img src="https://i.pinimg.com/474x/14/fc/05/14fc05cbaf4e67318c060d25a8462b1b.jpg" alt="twitter" style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%"}}/>
        <img src="https://i.pinimg.com/originals/50/68/ca/5068cae0be0b67710dda0360d42e64ac.jpg" alt="twitter" style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%"}}/>
    
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
