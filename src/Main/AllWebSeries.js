import React from 'react'
import ComponentCard from './ComponentCard';
import { Flex } from '@chakra-ui/react';
// import { useState, useEffect } from 'react';
import FetchContext  from '../FetchContext';
import { useContext } from 'react';

export default function AllShows() {
    const {apiData} = useContext(FetchContext); 
    console.log(apiData);

  return (
    <div style={{marginTop:"6rem", marginLeft:"40px"}}>
      <h1 style={{color:"white", letterSpacing:"1px"}}>Web Series</h1>
      <Flex style={{flexWrap:"wrap"}}>
        {apiData.filter((drama)=>{return drama.type==="web series"})
        .map((webSeries)=>(
            <ComponentCard 
            key={webSeries._id}
            item={webSeries}/>
        ))}
      </Flex>
    </div>
  )
}
