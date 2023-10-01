import { Container, Box, Flex, Button, border} from '@chakra-ui/react'
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ComponentCard from './ComponentCard';
import React from 'react';

export default function ShortFilm() {
    const[shortFilmList, setshortFilmList] = useState([]);

    const getMovies=async()=>{
        try{const storedData = localStorage.getItem("videoData");
                 
            if(storedData){
                const getData = JSON.parse(storedData);
                const parseData = getData.videoData;
                console.log(parseData);

        const shortFilmData = parseData.filter(item=>item.type==='short film');
       
        
         setshortFilmList(shortFilmData);
         
        }
    }catch(error){console.error("error")}
}
        useEffect(()=>{
            getMovies();
        },[])

        const addtoFav = (item) => {
            const favMovies = JSON.parse(localStorage.getItem("favouriteMovies")) || [];
            favMovies.push(item);
            localStorage.setItem("favouriteMovies", JSON.stringify(favMovies));
          };
     
  
  return (
    <>
    <Container style={{marginTop:"8rem"}}>
    <Container style={{marginLeft:"40px"}}>
          <Box
            as="p"
            sx={{
              fontSize: "25px",
              color: "white",
              fontFamily: "Arial",
              marginLeft: "20px",
              letterSpacing: "1px",
              marginBottom: "20px",
              fontWeight:"bold"
            }}
          >
          Movies & Shows You May Also Like
          </Box>
          <Flex sx={{flexWrap:"wrap"}}>
            {shortFilmList.map((exclusive, index) => (
              <ComponentCard
                key={exclusive._id}
                item={exclusive}
              />
            ))}
          </Flex>
        </Container>
</Container>
       
      
    </>
  );
}

