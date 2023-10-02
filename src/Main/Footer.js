import React from 'react';
import {Container, Flex, Spacer} from '@chakra-ui/react'
import{CiFacebook, CiTwitter} from 'react-icons/ci';
import {BiLogoInstagram} from'react-icons/bi';
import {AiOutlineYoutube} from 'react-icons/ai';
import { useEffect, useState } from 'react';


export default function Footer() {
     
  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth<1000);

  useEffect(()=>{
    const handleResize=()=>{
      setSmallerScreen(window.innerWidth<1000);
    }
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
},[])
  
  return (
    <>
    {smallerScreen?(
    <>
    <Container style={{marginTop:"4%"}}>
    <hr className='divider' />
    <Container style={{marginTop:"3%", marginLeft:"10%", alignItems:"center"}}>
    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="googleplaystore" style={{width:"120px", height:"60px", marginTop:"10px", marginLeft:"5px"}}/>
    </Container>
    <Flex style={{color:"white"}}>
    <h3 style={{marginLeft:"20%"}}>Connect with us</h3>
    <div><a href='https://m.facebook.com/ZEE5/events/'><CiFacebook style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%", color:"white", backgroundColor:"rgb(42, 41, 41)"}} /></a></div>
    <div><a href='https://www.instagram.com/zee5/'><BiLogoInstagram style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%", color:"white", backgroundColor:"rgb(42, 41, 41)"}}/></a></div>
    <div><a href='https://twitter.com/ZEE5India?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><CiTwitter style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%", color:"white", backgroundColor:"rgb(42, 41, 41)"}}/></a></div>
    <div><a href='https://www.youtube.com/channel/UCXOgAl4w-FQero1ERbGHpXQ'><AiOutlineYoutube style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%", color:"white", backgroundColor:"rgb(42, 41, 41)"}}/></a></div>
    
    </Flex>
  
    <Flex style={{color:"grey", marginTop:"40px", marginLeft:"5%"}}>
        <div >About Us</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>Help Center</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>Privacy Policy</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
        </Flex>
        <Flex style={{color:"grey", marginTop:"40px", marginLeft:"5%"}}>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>Terms of Use</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
        <div style={{marginLeft:"10px", marginRight:"10px"}}>Preference</div>
    </Flex>
    <div style={{marginTop:"40px", color:"grey"}}>Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+</div>
<div style={{color:"grey", marginBottom:"20px"}}>Copyright © 2023 Zee Entertainment Enterprises Ltd. All rights reserved.</div>
    </Container>
   
    </>
    ):(
     <Container style={{marginTop:"4%"}}>
    <hr style={{ borderColor: "gray", borderWidth: "1px", marginBottom: "1rem" }} />
    <Container style={{marginTop:"3%", marginLeft:"4%"}}>
    <Flex style={{color:"white"}}>
        <h3 >Download Apps</h3>
        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="googleplaystore" style={{width:"100px", height:"40px", marginTop:"10px", marginLeft:"5px"}}/>
        <h3 style={{marginLeft:"25%"}}>Connect with us</h3>
      <div><a href='https://m.facebook.com/ZEE5/events/'><CiFacebook style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%", color:"white", backgroundColor:"rgb(42, 41, 41)"}} /></a></div>
      <div><a href='https://www.instagram.com/zee5/'><BiLogoInstagram style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%", color:"white", backgroundColor:"rgb(42, 41, 41)"}}/></a></div>
       <div><a href='https://twitter.com/ZEE5India?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><CiTwitter style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%", color:"white", backgroundColor:"rgb(42, 41, 41)"}}/></a></div>
       <div><a href='https://www.youtube.com/channel/UCXOgAl4w-FQero1ERbGHpXQ'><AiOutlineYoutube style={{width:"40px", height:"40px", marginTop:"10px", marginLeft:"10px", borderRadius:"50%", color:"white", backgroundColor:"rgb(42, 41, 41)"}}/></a></div>
    
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
<div style={{color:"grey", marginBottom:"20px"}}>Copyright © 2023 Zee Entertainment Enterprises Ltd. All rights reserved.</div>
    </Container>
    </Container>
    )}
    </>
  )
}
