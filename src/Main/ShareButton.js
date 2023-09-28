import { Flex, Button, Popover, PopoverArrow, PopoverBody, PopoverHeader, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import React, { useState } from 'react'
import shareIcon from '../Assets/shareIcon.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';

export default function ShareButton() {
  return (
    <Popover 
    style={{border:"none", borderColor: 'transparent'}}>
        <PopoverTrigger style={{border:"none"}}>
            <img src={shareIcon} alt="Share" className='shareButton' />
        </PopoverTrigger>
        <PopoverContent style={{ border: "none", borderRadius: "none", borderColor:"transparent"}}>
           
            <PopoverBody style={{ border: "none", padding: "0", borderColor:"transparent"}}>
                <Flex style={{border:"none", justifyContent:"space-evenly"}}>
                    <Button style={{fontSize:"5px", border:"none", backgroundColor:"white", color:"#4267B2", padding:"1px"}}><FacebookIcon/></Button>
                    <Button style={{fontSize:"5px", border:"none", backgroundColor:"white", color:"#962fbf", padding:"1px"}}><InstagramIcon/></Button>
                    <Button style={{fontSize:"5px", border:"none", backgroundColor:"white", color:"#075e54", padding:"1px"}}><WhatsAppIcon/></Button>
                    <Button style={{fontSize:"5px", border:"none", backgroundColor:"white", color:"#26a7de", padding:"1px"}}><TwitterIcon/></Button>
                    <Button style={{fontSize:"5px", border:"none", backgroundColor:"white", color:"red", padding:"1px"}}><MailOutlineSharpIcon/></Button>
                </Flex>
            </PopoverBody>
        </PopoverContent>
    </Popover>
  )
}
