import { Flex,  Popover, PopoverBody, PopoverContent, PopoverTrigger} from '@chakra-ui/react'
import { PiShareFat } from 'react-icons/pi';
import {BiLogoFacebookCircle} from 'react-icons/bi';
import {AiFillInstagram} from'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import {ImMail4} from 'react-icons/im';
import {FacebookShareButton,   InstapaperShareButton, WhatsappShareButton,  MailruShareButton} from 'react-share';

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
                    <FacebookShareButton style={{fontSize:"15px", border:"none", padding:"5px", cursor:"pointer"}}
                    url="http://localhost:3000/">
                      <BiLogoFacebookCircle/>
                      </FacebookShareButton>

                    <InstapaperShareButton style={{fontSize:"15px", border:"none", padding:"5px", cursor:"pointer"}}
                    url="http://localhost:3000/">
                      <AiFillInstagram />
                      </InstapaperShareButton>

                    <WhatsappShareButton style={{fontSize:"10px", border:"none",  padding:"5px", cursor:"pointer"}}
                    url="http://localhost:3000/">
                      <BsWhatsapp/>
                      </WhatsappShareButton>
                    <MailruShareButton
                    style={{fontSize:"15px", border:"none",  padding:"5px", cursor:"pointer"}} 
                    url="http://localhost:3000/">
                      <ImMail4/>
                    </MailruShareButton>
                </Flex>
            </PopoverBody>
        </PopoverContent>
    </Popover>
  )
}
