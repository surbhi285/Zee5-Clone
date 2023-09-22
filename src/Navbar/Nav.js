import React from 'react';
import {useState} from 'react';
import {Container, Flex, UnorderedList, ListItem, Spacer, Button, Box, Input, InputGroup, InputLeftElement, textDecoration, position} from '@chakra-ui/react'
import {SearchIcon, DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";
import {NavLink, Link} from 'react-router-dom';
import SearchCard from '../Main/SearchCard';


export default function Nav({ isLoggedIn, setIsLoggedIn, username}) {
    console.log(username);
    const searchStyle={
        bg:"#0F0617", 
        color:"white", 
        width:"300px", 
        height:"35px", 
        pl:"40px",
        border:"1px solid white",
        borderRadius:"5px",  
    }

    const[isDropdownOpen, setIsDropDownOpen] = useState(false);
    const[option, setIsOption] = useState(false);
   
    const [searchData, setSearchData] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
   
    const toggleDropDown = () =>{
        setIsDropDownOpen(!isDropdownOpen);
    };
   
    const handleOption=()=>{
        setIsOption(!option);
    }

    const handleLogout = ()=>{    
        setIsLoggedIn(false);
    }

    const clearSearchValue = () => {
        setSearchData('');
      };

    const handleSearchInputChange = (event) => {
        const userInput = event.target.value;
        setSearchData(userInput);
        // Show suggestions when the user starts typing
        setShowSuggestions(userInput.length > 0);
      };

  return (
    <Container p="10px" bg="#0F0617" color="white" position="fixed" top="0" width="99%" zIndex="1000">
    <Flex as="nav" alignItems="center" color="white">
    <img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.40" alt="zee logo" style={{width: "60px"}}/>
    <UnorderedList style ={{listStyleType:"none", display:"flex", p:"10px"}}>
        <NavLink to='/' style={{color:"white", textDecoration:"none"}}>
        <ListItem mr={30} ml={20} fontSize={18} _hover={{textDecoration: "underline" }}>Home</ListItem>
        </NavLink>
        <NavLink to='/TvShows' style={{color:"white", textDecoration:"none"}}>
        <ListItem mr={30} ml={20} fontSize={18} _hover={{textDecoration: "underline"}}>TV Shows</ListItem>
        </NavLink>
        <NavLink to='/Movies' style={{color:"white", textDecoration:"none"}}>
        <ListItem mr={30} ml={20} fontSize={18} _hover={{textDecoration: "underline"}}>Movies</ListItem>
        </NavLink>
        <ListItem onClick={toggleDropDown}><DragHandleIcon fontSize={22} width={50} _hover={{color:"purple"}}/>
        {isDropdownOpen && (
            <div style={{position:"absolute", border:"1px solid gray", marginTop:"20px", backgroundColor:"#0F0617"}}>
                <ul style={{listStyleType:"none", position:"fixed", backgroundColor:"#0F0617", width:"150px", border:"0.5px solid grey", borderRadius:"5px"}}>
                
                <NavLink to='/Documentary' style={{color:"white", textDecoration:"none"}}>
                <li style={{marginTop:"20px", marginLeft:"0px", left:"20px"}}>
                <span
                onMouseEnter={(e) => {
                e.target.style.backgroundColor = "purple";
                e.target.style.border = "1px solid purple";
                e.target.style.borderRadius = "5px";
                e.target.style.paddingRight = "40px";

                }}
                onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#0F0617";
                e.target.style.border = "0.5px solid #0F0617";
                }}
                >
                    Documentary
                    </span>
                    </li>
                    </NavLink>
                    <br />
                
                
                <NavLink to='/Song' style={{color:"white", textDecoration:"none"}}>
                <li><span
                onMouseEnter={(e) => {
                e.target.style.backgroundColor = "purple";
                e.target.style.border = "1px solid purple";
                e.target.style.borderRadius = "5px";
                e.target.style.paddingRight = "40px";

                }}
                onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#0F0617";
                e.target.style.border = "0.5px solid #0F0617";
                }}
                >Video Songs</span></li>
                </NavLink>
                <br />

                <NavLink to='/shortFilm' style={{color:"white", textDecoration:"none"}}>
                <li><span
                onMouseEnter={(e) => {
                e.target.style.backgroundColor = "purple";
                e.target.style.border = "1px solid purple";
                e.target.style.borderRadius = "5px";
                e.target.style.paddingRight = "40px";

                }}
                onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#0F0617";
                e.target.style.border = "0.5px solid #0F0617";
                }}>Short Film</span></li>
                </NavLink>
                <br />
                </ul>
            </div>
        )}
        </ListItem>
        </UnorderedList>
        <Spacer />
        
        
    <Box style={{marginRight:"30px", backgroundColor:"#0F0617"}}>
    <InputGroup>
    <Input value={searchData} onChange ={handleSearchInputChange} type="text" placeholder='Search for Movies, Shows, Channels etc'
    sx={searchStyle} />
   {showSuggestions && <SearchCard searchData={searchData}  clearSearchValue={clearSearchValue}/>}
    <InputLeftElement>
    {/* <Link to="/SearchResult"> */}
    <SearchIcon sx={{cursor:"pointer", color:"white", padding:"10px"}} />
    {/* </ Link> */}
    </InputLeftElement>
    </InputGroup>
     </Box>
     {isLoggedIn ? (
          <div>
            <img src="https://t3.ftcdn.net/jpg/06/04/79/52/360_F_604795233_5zIpEvhWizTN7bUxSADUdrQQFGj315G3.jpg"
              style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "50px" }}
              onClick={handleOption}
            />
            {option && (
              <div style={{position: "absolute", border: "1px solid gray", marginTop: "20px", backgroundColor: "#0F0617", ":hover": { backgroundColor: "purple" },}}>
                <ul style={{
                    listStyleType: "none",
                    position: "fixed",
                    backgroundColor: "#0F0617",
                    width: "170px",
                    border: "0.5px solid grey",
                    borderRadius: "5px",
                  }}
                >
                  <li style={{marginTop: "10px",  marginLeft: "0px", marginRight: "20px", display: "flex", marginBottom: "20px", wordWrap: "break-word"}}>
                   <span
                   onMouseEnter={(e) => {
                   e.target.style.backgroundColor = "purple";
                   e.target.style.border = "1px solid purple";
                   e.target.style.borderRadius = "5px";
                   e.target.style.paddingRight = "40px";
   
                   }}
                   onMouseLeave={(e) => {
                   e.target.style.backgroundColor = "#0F0617";
                   e.target.style.border = "0.5px solid #0F0617";
                   }}>
                    Welcome, {username}
                    </span> </li> 
                  <NavLink to="/Watchlist" style={{ color: 'white', textDecoration: 'none' }}>
                    <li style={{marginTop: '10px', marginLeft: '0px', marginRight: '20px', marginBottom: '5px', fontSize: '15px', cursor: 'pointer'}}>
                    <span
                   onMouseEnter={(e) => {
                   e.target.style.backgroundColor = "purple";
                   e.target.style.border = "1px solid purple";
                   e.target.style.borderRadius = "5px";
                   e.target.style.paddingRight = "50px";
                   }}
                   onMouseLeave={(e) => {
                   e.target.style.backgroundColor = "#0F0617";
                   e.target.style.border = "0.5px solid #0F0617";
                   }}>My Watchlist</span>
                    </li>
                  </NavLink>
                  <br />
                  <Button onClick={handleLogout} style={{ border: '1px solid #0F0617', backgroundColor: '#0F0617', color: 'white', cursor: 'pointer'}}>
                    <li style={{cursor: 'pointer', fontSize: '15px', marginBottom: '20px'}}>
                    <span
                   onMouseEnter={(e) => {
                   e.target.style.backgroundColor = "purple";
                   e.target.style.border = "1px solid purple";
                   e.target.style.borderRadius = "5px";
                   e.target.style.paddingRight = "40px";
   
                   }}
                   onMouseLeave={(e) => {
                   e.target.style.backgroundColor = "#0F0617";
                   e.target.style.border = "0.5px solid #0F0617";
                   }}>
                      Logout
                      </span>
                    </li>
                  </Button>
                </ul>
              </div>
            )}
          </div>
        ) : (
          // Conditionally render the login button
          <NavLink to="/Login">
            <Button
              mr={30}
              sx={{
                bg: '#0F0617',
                color: 'white',
                width: '70px',
                border: '1px white solid',
                height: '35px',
                borderRadius: '5px',
                fontSize: 'Bold',
                cursor: 'pointer',
              }}
            >
              Login
            </Button>
          </NavLink>
        )}
        <NavLink to='/BuyPlan'>
        <Button mr={30} sx={{bg:"#4B0082", color:"white", border: "1px #4B0082 solid", borderRadius:"5px", width:"90px", height:"35px"}}>BUY PLANS</Button>
        </NavLink>
        <NavLink to='/BuyPlan'>
        <HamburgerIcon fontSize={25} textDecoration='none' color="white"/>
        </NavLink>
    </Flex>
   </Container>
  )
}
