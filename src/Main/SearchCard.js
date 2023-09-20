import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { color } from 'framer-motion';
import { ListItem, UnorderedList, Container } from '@chakra-ui/react';

export default function SearchCard({searchData, clearSearchValue}) {
     
  const cardStyle={
    backgroundColor:"#0F0617",
    color:"white",
    marginTop:"30px",
    marginLeft:"0px",
    marginRight:"100px",   
  
}
    const navigate = useNavigate();
    const[result, setResult] = useState([]); 
    const suggestionRef = useRef(null); 

    useEffect(() => {
        const storedData = localStorage.getItem("videoData");
        const getData = JSON.parse(storedData);
        const parseData = getData ? getData.videoData : [];

        
        console.log("Parsed data:", parseData);
      
        const movieName = parseData.filter((item) => {
          return item.title?.toLowerCase().includes(searchData?.toLowerCase());
        });
        console.log("Filtered results:", movieName);
      
        setResult(movieName);
      }, [searchData]);

      useEffect(()=>{
        const handleClickOutside = (event) => {
          if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
            setResult([]);
          }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);
     

      const handleSuggestionClick = (selectedItem) => {
        console.log("Suggestion clicked:", selectedItem);
        navigate(`/result/${selectedItem._id}`)
        clearSearchValue();
        setResult([]);
      }
  return (
    <Container style={{backgroundColor:"#0F0617"}}>
      {/* Suggestions Container */}
      {result.length > 0 && (
        <Container
        ref={suggestionRef}
          style={{
          position:"absolute",
            backgroundColor:"#0F0617",
            top: "150%",
            left: 0,
            width: "100%",
            maxHeight: "450px",
            overflowY: result.length>5?"scroll" :"auto",
            zIndex: 2,
            cursor:"pointer",
          }}
        >
          <UnorderedList style={{listStyle:"none"}}>
            {result.map((item) => (
              <ListItem  sx={cardStyle} key={item.id}>
                <Link  to={`/result/${item._id}`} onClick={() => handleSuggestionClick(item)} style={{textDecoration:"none", color:"white"}}>
                {item.title}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Container>
      )}
    </Container>
  )
}
