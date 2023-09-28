import React, { useEffect } from 'react';
import {useState, useRef} from 'react';
import {Container, Flex, UnorderedList, ListItem, Spacer, Button, Box, Input, InputGroup, InputLeftElement, textDecoration, position} from '@chakra-ui/react'
import {SearchIcon, DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";
import {NavLink, Link} from 'react-router-dom';
import SearchCard from '../Main/SearchCard';
import Zee from '../Assets/Zee.jpeg';
import AppsIcon from '@mui/icons-material/Apps';



export default function Nav({ isLoggedIn, setIsLoggedIn, username}) {
    console.log(username);
    const searchStyle={
        bg:"#0F0617", 
        color:"white", 
        width:"250px", 
        height:"35px", 
        pl:"40px",
        border:"1px solid grey",
        borderRadius:"5px",  
    }

    const[isDropdownOpen, setIsDropDownOpen] = useState(false);
   
    const[option, setIsOption] = useState(false);
   
    const [searchData, setSearchData] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [smallerScreen,  setIsSmallScreen] = useState(window.innerWidth < 800);

    const navLinkStyle = ({ isActive }) => {
      return {
        borderBottom: isActive ? "2px solid white" : "none",
        
      };
    };
   
    const toggleDropDown = () =>{
      console.log("dropdown clicked")
        setIsDropDownOpen(!isDropdownOpen);
        console.log("isDropDown:", isDropdownOpen)
    };
   
    const handleOption=()=>{
        setIsOption(!option);
    }

    const handleLogout = ()=>{  
       console.log("ashg")
        localStorage.removeItem('signupDeatils');
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
         
      useEffect(()=>{
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 800);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },[])
     
    useEffect(() => {
      console.log("isDropdownOpen:", isDropdownOpen);
    }, [isDropdownOpen]);
   

  return (
    <>
    {smallerScreen ? (
    <Container style={{marginTop:"20px"}}>
    <Flex>
    <img src={Zee} alt="zee logo" style={{width: "40px", marginLeft: "20px"}} />
    <NavLink to='/BuyPlan'>
    <Button mr={30} ml={30} sx={{bg:"#4B0082", color:"white", border: "1px #4B0082 solid", borderRadius:"5px", width:"90px", height:"25px"}}>BUY PLANS</Button>
    </NavLink>
    <Box style={{marginRight:"30px", backgroundColor:"#0F0617", marginLeft:"70px"}}>
    {/* <Link to="/SearchResult"> */}
    <SearchIcon  onChange ={handleSearchInputChange} sx={{cursor:"pointer", color:"white", padding:"10px", }} />
    {showSuggestions && <SearchCard searchData={searchData}  clearSearchValue={clearSearchValue} />}
    {/* </ Link> */}
     </Box>
     {isLoggedIn ? (
          <div style={{marginTop:"10px"}}>
            <img src="https://t3.ftcdn.net/jpg/06/04/79/52/360_F_604795233_5zIpEvhWizTN7bUxSADUdrQQFGj315G3.jpg"
              style={{ width: "10px", height: "10px", borderRadius: "50%", marginRight: "50px" }}
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
                  <li style={{marginTop: "10px", float:"left",marginLeft: "0px", marginRight: "20px", display: "flex", marginBottom: "20px", wordWrap: "break-word"}}>
                   Welcome, {username}</li> 
                  <NavLink to="/Watchlist" style={{ color: 'white', textDecoration: 'none' }}>
                    <li style={{marginTop: '10px', marginLeft: '0px', marginRight: '20px', marginBottom: '5px', fontSize: '15px', cursor: 'pointer'}}>
                    My Watchlist</li>
                  </NavLink>
                  <br />
                  <Button onClick={handleLogout} style={{ border: '1px solid #0F0617', backgroundColor: '#0F0617', color: 'white', cursor: 'pointer'}}>
                    <li style={{cursor: 'pointer', fontSize: '15px', marginBottom: '20px'}}>
                      Logout
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
                width: '40px',
                border: '1px white solid',
                height: '20px',
                borderRadius: '5px',
                fontSize: 'Bold',
                cursor: 'pointer',
                marginTop:"5px",
                marginLeft:"5px"
              }}
            >
              Login
            </Button>
          </NavLink>
        )}
        </Flex>
    <Flex sx={{marginBottom:"0", marginTop:"10px"}}>
    <NavLink to='/' style={{color:"white", textDecoration:"none"}}>
    <Container mr={10} ml={30} mb={5} fontSize={15} _hover={{textDecoration: "underline" }}>Home</Container>
    </NavLink>
    <NavLink to='/TvShows' style={{color:"white", textDecoration:"none"}}>
    <Container mr={10} ml={10} fontSize={15} _hover={{textDecoration: "underline"}}>TV Shows</Container>
    </NavLink>
    <NavLink to='/Movies' style={{color:"white", textDecoration:"none"}}>
    <Container  mr={10} ml={10} fontSize={15} _hover={{textDecoration: "underline"}}>Movies</Container>
    </NavLink> 
    <NavLink to='/Documentary' style={{color:"white", textDecoration:"none"}}>
    <Container  mr={10} ml={10} fontSize={15} _hover={{textDecoration: "underline"}}>Documentries</Container>
    </NavLink>
    <NavLink to='/Song' style={{color:"white", textDecoration:"none"}}>
    <Container  mr={10} ml={10} fontSize={18} _hover={{textDecoration: "underline"}}>Video Song</Container>
    </NavLink>
    <NavLink to='/ShortFilm' style={{color:"white", textDecoration:"none"}}>
    <Container  mr={10} ml={10} fontSize={18} _hover={{textDecoration: "underline"}}>Short Film</Container>
    </NavLink> 
    </Flex>
    </Container>
    ):(<>
    <Container p="10px" bg="#0F0617" color="white" position="fixed" top="0" width="99%" zIndex="1000">
    <Flex as="nav" alignItems="center" color="white">
    <img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.40" alt="zee logo" style={{width: "60px"}}/>
        <Flex>
    <UnorderedList style ={{listStyleType:"none", display:"flex", p:"10px"}}>
        
        <NavLink to='/' style={navLinkStyle} className="navLink">
        <ListItem >Home</ListItem>
        </NavLink>

        <NavLink to='/TvShows' style={navLinkStyle} className="navLink">
        <ListItem>TV Shows</ListItem>
        </NavLink>

        <NavLink to='/Movies' style={navLinkStyle} className="navLink">
        <ListItem>Movies</ListItem>
        </NavLink>
        
       
        <ListItem  onClick={(e)=>{toggleDropDown();
        }}>
        <div className='AppsIcon'><AppsIcon /></div>
  {isDropdownOpen && (
    <div style={{ position: "absolute", marginTop: "20px", backgroundColor: "#0F0617", width: "200px" }}>
      <ul className="ul">
      <NavLink to='/NoResult' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem" style={{marginTop:"20px"}}>
            Premium
          </li>
          </NavLink>
        <NavLink to='/AllShows' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem">
            Web Series
          </li>
          </NavLink>
        <NavLink to='/NoResult' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem">
            News
          </li>
        </NavLink>
        <NavLink to='/NoResult' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem">
            Eduaruaa
          </li>
        </NavLink>
        <NavLink to='/NoResult' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem">
            Live TV
          </li>
        </NavLink>
        <NavLink to='/NoResult' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem">
            Music
          </li>
        </NavLink>
        <NavLink to='/NoResult' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem">
            Sports
          </li>
        </NavLink>
        <NavLink to='/NoResult' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem">
            Rent
          </li>
        </NavLink>
        <NavLink to='/NoResult' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem">
            Kids
          </li>
        </NavLink>
        <NavLink to='/NoResult' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem">
            Songs
          </li>
        </NavLink>
        <NavLink to='/NoResult' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem">
            Videos
          </li>
        </NavLink>
        <NavLink to='/NoResult' style={{ color: "white", textDecoration: "none" }}>
          <li className="listItem">
            Channels
          </li>
        </NavLink>

        <br />
      </ul>
    </div>
  )}
</ListItem>
    </UnorderedList>
        <Spacer />
        
        
    <Box style={{marginRight:"30px", backgroundColor:"#0F0617", marginLeft:"250px", marginTop:"10px"}}>
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
          <div style={{marginTop:"10px"}}>
            <img src="https://t3.ftcdn.net/jpg/06/04/79/52/360_F_604795233_5zIpEvhWizTN7bUxSADUdrQQFGj315G3.jpg"
              style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "40px", marginTop:"5px" }}
              onClick={handleOption}
            />
            {option && (
              <div style={{position: "absolute", border: "1px solid gray", marginTop: "5px", backgroundColor: "#0F0617", ":hover": { backgroundColor: "purple" },}}>
                <ul style={{
                    listStyleType: "none",
                    position: "fixed",
                    backgroundColor: "#0F0617",
                    width: "170px",
                    border: "0.5px solid grey",
                    borderRadius: "5px",
                  }}
                >
                 <li className="listItem listItem1">
                Welcome, {username}</li> 
                <NavLink to="/Watchlist" style={{ color: 'white', textDecoration: 'none' }}>
                <li className="listItem" style={{marginTop:"10px"}}>My Watchlist</li>
                  </NavLink>
                  <br />
                  <li className="listItem" style={{marginBottom:"10px", marginTop:"0"}}
                onClick={()=>handleLogout()}>
                      Logout
                    </li>
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
                height: '36px',
                borderRadius: '5px',
                fontSize: 'Bold',
                cursor: 'pointer',
                marginTop:"10px"
              }}
            >
              Login
            </Button>
          </NavLink>
        )}
        <NavLink to='/BuyPlan'>
        <Button mr={30} sx={{marginTop:"10px", bg:"#8230c6", 
        color:"white", border: "1px #8230c6 solid", 
        borderRadius:"5px", width:"90px", height:"36px", ":hover":{backgroundColor:"#4B0082", border: "1px #4B0082 solid"}}}>
          BUY PLANS
          </Button>
        </NavLink>
        <NavLink to='/BuyPlan'>
        <HamburgerIcon fontSize={25} textDecoration='none' color="white" marginTop="10px"/>
        </NavLink>
        </Flex>
        
    </Flex>
   </Container>
        </>)}

        </>
    
   
  )
}
