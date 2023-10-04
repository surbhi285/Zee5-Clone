import { Container, Box, Flex, Button, border} from '@chakra-ui/react'
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ComponentCard from './ComponentCard';
import React from 'react';
import {useContext} from'react';
import FetchContext  from '../FetchContext';

export default function ShortFilm() {
    const {apiData} = useContext(FetchContext);
    console.log(apiData);

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
          <Flex style={{flexWrap:"wrap"}}>
        {apiData.filter((drama)=>{return drama.type==="short film"})
        .map((shortFilm)=>(
            <ComponentCard 
            key={shortFilm._id}
            item={shortFilm}/>
        ))}
      </Flex>
        </Container>
</Container>
    </>
  );
}

