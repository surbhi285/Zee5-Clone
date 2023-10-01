import { Flex, Button, Popover, PopoverArrow, PopoverBody, PopoverHeader, PopoverContent, PopoverTrigger, background } from '@chakra-ui/react'
import React, { useState } from 'react'
import { PiShareFat } from 'react-icons/pi';
import {BiLogoFacebookCircle} from 'react-icons/bi';
import {AiFillInstagram} from'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import {ImMail4} from 'react-icons/im';


export default function ShareButton() {
  return (
    <Popover 
    style={{border:"none"}}>
        <PopoverTrigger style={{border: "none"}}>
        <Flex className='shareButton'>
              <PiShareFat style={{fontSize:"20px"}}/>
              <div style={{marginLeft:"5px"}}>Share</div>
              </Flex>
        </PopoverTrigger>
        <PopoverContent style={{ border:"none"}}>
           
            <PopoverBody style={{ border: "none", padding: "0"}}>
                <Flex style={{border:"none", justifyContent:"space-evenly", cursor:"pointer"}}>
                    <Button style={{fontSize:"15px", border:"none", padding:"5px", cursor:"pointer"}}><BiLogoFacebookCircle/></Button>
                    <Button style={{fontSize:"15px", border:"none", padding:"5px", cursor:"pointer"}}><AiFillInstagram /></Button>
                    <Button style={{fontSize:"10px", border:"none",  padding:"5px", cursor:"pointer"}}><BsWhatsapp/></Button>
                    <Button style={{fontSize:"5px", border:"none",  padding:"5px", cursor:"pointer"}}><ImMail4/></Button>
                    
                </Flex>
            </PopoverBody>
        </PopoverContent>
    </Popover>
  )
}
