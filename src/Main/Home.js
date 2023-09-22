import { Container, Box, Flex, Button } from '@chakra-ui/react'
import { AddIcon, SmallAddIcon } from '@chakra-ui/icons';
import {useEffect, useState} from 'react';
import { Link, json } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import React from 'react';
import Footer from './Footer';
import ComponentCard from './ComponentCard';


export default function Home({handleShown}) {
      handleShown();

    const[exclusiveList, setExclusivesList] = useState([]);
    const[moviesList, setMoviesList] = useState([]);
    const[tvShow, setTvList] = useState([]);
    const[video, setVideo] = useState([]);
    const[trailer, setTrailer] = useState([]);
    const[webSeries, setWebSeries] = useState([]);
    const[documentries, setDocumentries] = useState([]);

    const [smallerScreen,  setIsSmallScreen] = useState(window.innerWidth < 600);

    const [hoveredStates, setHoveredStates] = useState({
        exclusive: [],
        movie: [],
        tv: [],
        video: [],
        trailer: [],
        webSeries: [],
        documentry: [],
      });
    
      const handleHover = (rowName, index, isHovered) => {
        // Clone the current state object
        const updatedHoveredStates = { ...hoveredStates };
        // Update the hover state for the specified row and index
        updatedHoveredStates[rowName][index] = isHovered;
        // Set the updated state object
        setHoveredStates(updatedHoveredStates);
      };
    
  
    const getMovies=async()=>{
    try{const storedData = localStorage.getItem("videoData");
             
        if(storedData){
            const getData = JSON.parse(storedData);
            const parseData = getData.videoData;
            const exclusiveList = parseData.filter(item=>item.type==="short film")
            const moviesData = parseData.filter(item=>item.type==='movie');
            const tvShowData = parseData.filter(item=>item.type==="tv show");
            const videoData = parseData.filter(item=>item.type==="video song");
            const trailerData = parseData.filter(item=>item.type==="trailer");
            const webSeriesData = parseData.filter(item=>item.type==="web series");
            const documentriesData = parseData.filter(item=>item.type==="documentary");
        
        
        //  console.log(data.data);
         setExclusivesList(exclusiveList);
         setMoviesList(moviesData);
         setTvList(tvShowData);
         setVideo(videoData);
         setTrailer(trailerData);
         setWebSeries(webSeriesData);
         setDocumentries(documentriesData);


        }else{
            const response = await(fetch("https://academics.newtonschool.co/api/v1/ott/show?limit=100",
            {
                method: 'GET',
                headers: {
                    'projectId': "8jf3b15onzua",
                }
            }))
        const data = await response.json();
        console.log(data);
        const result = data.data;
        const exclusiveList = result.filter(item=>item.type==="short film")
            const moviesData = result.filter(item=>item.type==='movie');
            const tvShowData = result.filter(item=>item.type==="tv show");
            const videoData = result.filter(item=>item.type==="video song");
            const trailerData = result.filter(item=>item.type==="trailer");
            const webSeriesData = result.filter(item=>item.type==="web series");
            const documentriesData = result.filter(item=>item.type==="documentary");
        
        
        //  console.log(data.data);
         setExclusivesList(exclusiveList);
         setMoviesList(moviesData);
         setTvList(tvShowData);
         setVideo(videoData);
         setTrailer(trailerData);
         setWebSeries(webSeriesData);
         setDocumentries(documentriesData);
        console.log("result", result);
        
        localStorage.setItem("videoData", JSON.stringify({"videoData": result}))
        }} catch(error){console.error("error")}
        };

        useEffect(()=>{
          getMovies();
          const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 800);
          };
          window.addEventListener("resize", handleResize);
          return () => {
            window.removeEventListener("resize", handleResize);
          };
          
        },[])
  
  return (
    <>
    {smallerScreen ? (
      <>
      <ImageSlider />
      </>
    ):(
<>
    <Container >
        <Container>
            <ImageSlider />
            </Container>
            <Container style={{ marginTop: "40px", marginLeft:"40px"}}>
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
          <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
            {exclusiveList.map((exclusive, index) => (
              <ComponentCard
                key={exclusive._id}
                item={exclusive}
                isHovered={hoveredStates.exclusive[index]}
                handleHover={(isHovered) => handleHover("exclusive", index, isHovered)}
              />
            ))}
          </Flex>
        </Container>

    

        <Container style={{ marginTop: "40px", marginLeft:"40px"}}>
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
            Movies
          </Box>
          <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
            {moviesList.map((movie, index) => (
              <ComponentCard
                key={movie._id}
                item={movie}
                isHovered={hoveredStates.movie[index]}
                handleHover={(isHovered) => handleHover("movie", index, isHovered)}
              />
            ))}
          </Flex>
        </Container>

         <Container style={{ marginTop: "40px", marginLeft:"40px"}}>
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
            Tv shows
          </Box>
          <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
            {tvShow.map((tvShow, index) => (
              <ComponentCard
                key={tvShow._id}
                item={tvShow}
                isHovered={hoveredStates.tv[index]}
                handleHover={(isHovered) => handleHover("tv", index, isHovered)}
              />
            ))}
          </Flex>
        </Container>

        <Container style={{ marginTop: "40px", marginLeft:"40px"}}>
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
            Video Songs
          </Box>
          <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
            {video.map((video, index) => (
              <ComponentCard
                key={video._id}
                item={video}
                isHovered={hoveredStates.video[index]}
                handleHover={(isHovered) => handleHover("video", index, isHovered)}
              />
            ))}
          </Flex>
        </Container>


        <Container style={{ marginTop: "40px", marginLeft:"40px"}}>
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
            Trailer
          </Box>
          <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
            {trailer.map((trailer, index) => (
              <ComponentCard
                key={trailer._id}
                item={trailer}
                isHovered={hoveredStates.trailer[index]}
                handleHover={(isHovered) => handleHover("trailer", index, isHovered)}
              />
            ))}
          </Flex>
        </Container>


        <Container style={{ marginTop: "40px", marginLeft:"40px"}}>
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
    Documentary
  </Box>
  <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
    {documentries.map((documentary, index) => (
      <ComponentCard
        key={documentary._id}
        item={documentary}
        isHovered={hoveredStates.documentry[index]}
        handleHover={(isHovered) => handleHover("documentry", index, isHovered)}
      />
    ))}
  </Flex>
</Container>

        <Container style={{ marginTop: "40px", marginLeft:"40px"}}>
          <Box
            as="p"
            sx={{
              fontSize: "25px",
              color: "white",
              fontFamily: "Arial",
              marginLeft: "20px",
              marginBottom:"20px",
              letterSpacing: "1px",
            }}
          >
            Web Series
          </Box>
          <Flex sx={{ overflowX: "scroll", overflowY: "scroll", "&::-webkit-scrollbar": { width: "1px" } }}>
            {webSeries.map((webSeries, index) => (
              <ComponentCard
                key={webSeries._id}
                item={webSeries}
                isHovered={hoveredStates.webSeries[index]}
                handleHover={(isHovered) => handleHover("webSeries", index, isHovered)}
              />
            ))}
          </Flex>
        </Container>
    </Container>
    <Footer />
    </>
    )}
    </>
  )
}
