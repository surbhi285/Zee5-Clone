import { Container, Box, Flex} from '@chakra-ui/react'
import {useEffect, useState, useContext} from 'react';
import React from 'react';
import ComponentCard from './ComponentCard';
import Footer from './Footer';
import ImageSlider from "./ImageSlider";
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FetchContext  from '../FetchContext';


export default function Movies() {
     
      const[smallerScreen, setSmallerScreen] = useState(window.innerWidth<500);
      const{apiData} = useContext(FetchContext);
    
        useEffect(()=>{
            const handleResize=()=>{
            setSmallerScreen(window.innerWidth<500);
            };
            window.addEventListener("resize", handleResize);
            return()=>{
             window.addEventListener("resize", handleResize);
            }
        },[])

        
        const renderComponentCards = (data) => {
          if (!Array.isArray(data)) {
            return null;
          }
        
          return (
            <Flex sx={{ overflowX: 'scroll', overflowY: 'scroll', '&::-webkit-scrollbar': { width: '1px' } }}>
              {data.map((item) => (
                <ComponentCard key={item._id} item={item} />
              ))}
            </Flex>
          );
              }

  return (
    <>
    {smallerScreen?(
 <Container style={{marginTop:"5rem"}}>
 <Container>
   <ImageSlider />
 </Container>
<Container style={{marginLeft:"10px"}}>
  <Flex justifyContent="space-between">
     <Box
       as="p"
       sx={{
         fontSize: "15px",
         color: "white",
         fontFamily: "Arial",
         marginLeft: "15px",
         letterSpacing: "1px",
       }}
     >
       ZEE5 Exclusives
     </Box>
     <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px", fontSize:"12px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
     </Flex>
     {renderComponentCards(apiData.filter((item) => (item.type==="movie" || item.type==="trailer") && (item.keywords.includes("romance")|| item.keywords.includes("love"))))}
   </Container>

   <Container style={{marginLeft:"10px"}}>
    <Flex justifyContent="space-between">
     <Box
       as="p"
       sx={{
         fontSize: "15px",
         color: "white",
         fontFamily: "Arial",
         marginLeft: "20px",
         letterSpacing: "1px",
       }}>
       Action Movies
     </Box>
     <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px", fontSize:"12px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
     </Flex>
     {renderComponentCards(apiData.filter((item) =>(item.type==="movie" || item.type==="trailer") && (item.keywords.includes("action")|| item.keywords.includes("thriller"))))}
   </Container>

   <Container style={{marginLeft:"10px"}}>
    <Flex justifyContent={'space-between'}>
     <Box
       as="p"
       sx={{
         fontSize: "15px",
         color: "white",
         fontFamily: "Arial",
         marginLeft: "20px",
         letterSpacing: "1px",
       }}
     >
     Comedy Movies
     </Box>
     <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px", fontSize:"12px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
     </Flex>
     {renderComponentCards(apiData.filter((item) =>(item.type==="movie" || item.type==="trailer") && (item.keywords.includes("horror")||item.keywords.includes("darkness"))))}
   </Container>

   <Container style={{marginLeft:"10px"}}>
    <Flex justifyContent={'space-between'}>
     <Box
       as="p"
       sx={{
         fontSize: "15px",
         color: "white",
         fontFamily: "Arial",
         marginLeft: "15px",
         letterSpacing: "1px",
       }}
     >
     Romantic Movies
     </Box>
     <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px", fontSize:"12px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
     </Flex>
     {renderComponentCards(apiData.filter((item) =>(item.type==="movie" || item.type==="trailer") && (item.keywords.includes("action")|| item.keywords.includes("thriller"))))}
   </Container>


    <Container style={{marginLeft:"10px"}}>
      <Flex justifyContent={'space-between'}>
     <Box
       as="p"
       sx={{
         fontSize: "15px",
         color: "white",
         fontFamily: "Arial",
         marginLeft: "15px",
         letterSpacing: "1px",
       }}>
       Horror Movies
     </Box>
     <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px", fontSize:"12px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
      </Flex>
     {renderComponentCards(apiData.filter((item) =>(item.type==="movie" || item.type==="trailer") && (item.keywords.includes("drama")|| item.keywords.includes("comedy")|| item.keywords.includes("epic"))))}
   </Container>
   </Container>
    ):( <Container style={{marginTop:"8rem"}}>
    <Container>
      <ImageSlider />
    </Container>
  <Container style={{marginLeft:"40px", marginTop:"30px"}}>
    <Flex justifyContent={'space-between'}>
        <Box
          as="p"
          sx={{
            fontSize: "25px",
            color: "white",
            fontFamily: "Arial",
            marginLeft: "20px",
            letterSpacing: "1px",
            marginBottom:"0",
          }}
        >
          ZEE5 Exclusives
        </Box>
        <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
      </Flex>
        {renderComponentCards(apiData.filter((item) => (item.type==="movie" || item.type==="trailer")))}
      </Container>

      <Container style={{marginLeft:"40px"}}>
        <Flex justifyContent={'space-between'}>
        <Box
          as="p"
          sx={{
            fontSize: "25px",
            color: "white",
            fontFamily: "Arial",
            marginLeft: "20px",
            letterSpacing: "1px",
            marginBottom:"0",
          }}
        >
          Action Movies
        </Box>
        <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
      </Flex>
      {renderComponentCards(apiData.filter((item) =>(item.type==="movie" || item.type==="trailer") && (item.keywords.includes("action")|| item.keywords.includes("thriller"))))}
      </Container>

      <Container style={{marginLeft:"40px"}}>
        <Flex justifyContent={'space-between'}>
        <Box
          as="p"
          sx={{
            fontSize: "25px",
            color: "white",
            fontFamily: "Arial",
            marginLeft: "20px",
            letterSpacing: "1px",
            marginBottom:"0",
          }}
        >
        Comedy Movies
        </Box>
        <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
      </Flex>
        {renderComponentCards(apiData.filter((item) =>(item.type==="movie" || item.type==="trailer") && (item.keywords.includes("comedy")|| item.keywords.includes("drama")||item.keywords.includes("sci-fi"))))}
      </Container>

      <Container style={{marginLeft:"40px"}}>
        <Flex justifyContent={'space-between'}>
        <Box
          as="p"
          sx={{
            fontSize: "25px",
            color: "white",
            fontFamily: "Arial",
            marginLeft: "20px",
            letterSpacing: "1px",
            marginBottom:"0",
          }}
        >
        Romantic Movies
        </Box>
        <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
      </Flex>
        {renderComponentCards(apiData.filter((item) =>(item.type==="movie" || item.type==="trailer") && (item.keywords.includes("love")|| item.keywords.includes("romantic")|| item.keywords.includes("fantasy"))))}
      </Container>


       <Container style={{marginLeft:"40px", marginTop:"40px"}}>
        <Flex justifyContent={'space-between'}>
        <Box
          as="p"
          sx={{
            fontSize: "25px",
            color: "white",
            fontFamily: "Arial",
            marginLeft: "20px",
            letterSpacing: "1px",
            marginBottom:"0",
          }}
        >
          Horror Movies
        </Box>
        <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
      </Flex>
        {renderComponentCards(apiData.filter((item) =>(item.type==="movie" || item.type==="trailer") && (item.keywords.includes("horror")|| item.keywords.includes("thriller")|| item.keywords.includes("epic"))))}
      </Container>
      </Container>
      )}
   
        <Footer />
    </>
  );
}

