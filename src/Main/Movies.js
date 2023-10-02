import { Container, Box, Flex, Button, border} from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons';
import {useEffect, useState} from 'react';
import React from 'react';
import ComponentCard from './ComponentCard';
import Footer from './Footer';
import ImageSlider from "./ImageSlider";
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Movies({handleShown}) {
 handleShown();
     
       const[smallerScreen, setSmallerScreen] = useState(window.innerWidth<500);

    const[moviesList, setMoviesList] = useState([]);
    const[romantic, setRomantic] = useState([]);
    const[action, setAction] = useState([]);
    const[horror, setHorror] = useState([]);
    const[comedy, setComedy] = useState([]);
    
    

    const getMovies=async()=>{
        try{const storedData = localStorage.getItem("videoData");
                 
            if(storedData){
                const getData = JSON.parse(storedData);
                const parseData = getData.videoData;
                console.log(parseData);
        const moviesData = parseData.filter(item=>item.type==='movie');
        const romanticData = parseData.filter(item=> (item.type==="movie" || item.type==="trailer") && (item.keywords.includes("romance")|| item.keywords.includes("love")));
        // console.log(romanticData);
        const actionData = parseData.filter(item=> (item.type==="movie" || item.type==="trailer") && (item.keywords.includes("action")|| item.keywords.includes("thriller")));
        // console.log(actionData);
        const horrorData = parseData.filter(item => (item.type==="movie" || item.type==="trailer") && (item.keywords.includes("horror")||item.keywords.includes("darkness")));
        // console.log(horrorData);
        const comedyData = parseData.filter(item=> (item.type==="movie" || item.type==="trailer") && (item.keywords.includes("drama")|| item.keywords.includes("comedy")|| item.keywords.includes("epic")));
        // console.log(comedyData);
        
        //  console.log(data.data);
         setMoviesList(moviesData);
         setRomantic(romanticData);
         setAction(actionData);
         setHorror(horrorData);
         setComedy(comedyData);
        }
    }catch(error){console.error("error")}
}
        useEffect(()=>{
            getMovies();
            const handleResize=()=>{
            setSmallerScreen(window.innerWidth<500);
            };
            window.addEventListener("resize", handleResize);
            return()=>{
             window.addEventListener("resize", handleResize);
            }
        },[])

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
     <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
       {moviesList.map((exclusive) => (
         <ComponentCard
           key={exclusive._id}
           item={exclusive}
         />
       ))}
     </Flex>
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
     <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
       {action.map((action) => (
         <ComponentCard
           key={action._id}
           item={action}
         />
       ))}
     </Flex>
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
     <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
       {comedy.map((comedy) => (
         <ComponentCard
           key={comedy._id}
           item={comedy}
         />
       ))}
     </Flex>
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
     <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
       {romantic.map((romantic) => (
         <ComponentCard
           key={romantic._id}
           item={romantic}
         />
       ))}
     </Flex>
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
     <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
       {horror.map((horror) => (
         <ComponentCard
           key={horror._id}
           item={horror}
         />
       ))}
     </Flex>
   </Container>
   </Container>
    ):( <Container style={{marginTop:"8rem"}}>
    <Container>
      <ImageSlider />
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
            marginBottom: "20px",
          }}
        >
          ZEE5 Exclusives
        </Box>
        <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
      </Flex>
        <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
          {moviesList.map((exclusive) => (
            <ComponentCard
              key={exclusive._id}
              item={exclusive}
            />
          ))}
        </Flex>
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
            marginBottom: "20px",
          }}
        >
          Action Movies
        </Box>
        <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
      </Flex>
        <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
          {action.map((action) => (
            <ComponentCard
              key={action._id}
              item={action}
            />
          ))}
        </Flex>
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
            marginBottom: "20px",
          }}
        >
        Comedy Movies
        </Box>
        <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
      </Flex>
        <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
          {comedy.map((comedy) => (
            <ComponentCard
              key={comedy._id}
              item={comedy}
            />
          ))}
        </Flex>
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
            marginBottom: "20px",
          }}
        >
        Romantic Movies
        </Box>
        <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
      </Flex>
        <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
          {romantic.map((romantic) => (
            <ComponentCard
              key={romantic._id}
              item={romantic}
            />
          ))}
        </Flex>
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
            marginBottom: "20px",
          }}
        >
          Horror Movies
        </Box>
        <Link to="/AllMovies" style={{textDecoration:"none", color:"#a785ff"}}>
      <Box style={{color:"#a785ff",paddingTop:"15px", paddingRight:"10px"}}>More <ChevronRightIcon style={{fontSize:"15px"}}/> </Box>
      </Link>
      </Flex>
        <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
          {horror.map((horror) => (
            <ComponentCard
              key={horror._id}
              item={horror}
            />
          ))}
        </Flex>
      </Container>
      </Container>
      )}
   
        <Footer />
    </>
  );
}

