import React from 'react'
import ComponentCard from './ComponentCard';
import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function AllShows() {
    const[Trailer, setTrailer] = useState([]);

    const getShows=async()=>{
        try{ const storedData = localStorage.getItem("videoData");
            if(storedData){
            const getData = JSON.parse(storedData);
            const parseData = getData.videoData;
            console.log(parseData);
            const TrailerData = parseData.filter(item=>(item.type==="trailer"));
            setTrailer(TrailerData);
            }

            }catch(error){console.error("error")}
        }
    useEffect(()=>{
        getShows();
    },[])

  return (
    <div style={{marginTop:"6rem", marginLeft:"40px"}}>
      <h1 style={{color:"white", letterSpacing:"1px"}}>Short Movies</h1>
      <Flex style={{flexWrap:"wrap"}}>
        {Trailer.map((trailer)=>(
            <ComponentCard 
            key={trailer._id}
            item={trailer}/>
        ))}
      </Flex>
    </div>
  )
}
