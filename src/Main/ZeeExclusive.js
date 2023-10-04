import { Container, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import {useContext} from 'react';
import FetchContext from '../FetchContext';
import ComponentCard from './ComponentCard';

export default function AllShows() {
  const{apiData} = useContext(FetchContext);

  console.log("data", apiData)
    

  return (
    <div style={{marginTop:"5rem", marginLeft:"40px"}}>
        <h1 style={{color: "white", marginLeft:"30px", letterSpacing:"1px"}}>ZEE Exclusive</h1>
        <Flex style={{flexWrap:"wrap"}}>
        {apiData.filter((drama)=>{return drama.type==="movie"})
        .map((movie)=>(
            <ComponentCard 
            key={movie._id}
            item={movie}/>
        ))}
        </Flex>

    </div>
  )
}

