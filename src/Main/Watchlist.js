import { useEffect, useState, useParams } from "react";
import { Container, Box, Button, Flex, Grid, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {TbFaceIdError} from 'react-icons/tb';
import ProfileItem from "./ProfileItem";
import {AiOutlineClose} from 'react-icons/ai';

export default function Watchlist() {
    const[watchlist, setWatchList] = useState([]);
    const [loading, setLoading] = useState(true);
   
    async function getWatchList (){
      const userInfo = localStorage.getItem("signup")
      if (userInfo){
        const userDetail = JSON.parse(userInfo);
        const response = await(fetch("https://academics.newtonschool.co/api/v1/ott/watchlist/like",
            {
                method: 'GET',
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${userDetail.sign.token}`,
                    projectId: "8jf3b15onzua",
                }
            }))
            
      console.log("response", response);
      const data = await response.json();
      console.log("data i need:", data.data);
      if (Array.isArray(data.data?.shows)){
      setWatchList(data.data?.shows);
      setLoading(false)
      } else {
        console.error("Data is not an array:", data.data.shows);
      }
    }
  }


     useEffect(()=>{
      getWatchList();
     },[])

     const addRemoveWatchList=(itemId)=>{
      const updatedWatchList = watchlist.filter((item)=>item._id !== itemId);
      setWatchList(updatedWatchList);
    }

    return (
      <div style={{ marginTop: "7rem" }}>
        <div style={{border:"0.5px solid grey", height:"40rem", width:"70rem",marginLeft:"70px"}}>
        <Flex>
        <Container style={{ width: "20rem", flex: "0 0 10rem"}}>
        <ProfileItem />
          </Container>
          <Flex style={{flexDirection:"column"}}>
      <h1 style={{ color: "white", marginLeft: "50px", height:"50px",width:"30rem"}}>My Watchlist</h1>
    
      <hr className="divider" />
      {loading ? (
        <div> Loading...
        </div>
      ) : watchlist.length===0 ?(
        <div style={{ width:"50rem"}}>
          <TbFaceIdError style={{color:"grey", fontSize:"200px", paddingTop:"80px", paddingLeft:"42%" }}/>
         <div style={{color:"grey", fontSize:"50px", paddingLeft:"20%"}}>Uh-Oh! Nothing to watch</div> 
        </div>):(
        <>
        <hr style={{color:"white"}}/>
        <Grid templateColumns="repeat(2, 1fr)"  width="55rem" height="auto">
          {watchlist.map((item) => (
          <Box style={{margin:"10px", padding:"20px", display:"flex",flexDirection:"column", alignItem:"flex-start", height:"150px", width:"300px", flexWrap:"wrap"}}>
          <Container style={{ maxHeight:"150px", width:"50%", overflow:"hidden"}}>
          <img src={item.thumbnail} alt="item.title" style={{width:"100%", objectFit:"cover", borderRadius:"8px"}}/>
          </Container>
          <div style={{textAlign:"left", color:"white", paddingLeft:"20px", paddingTop:"50px",width:"50%", height:"40px"}}>{item.title}</div>
          <Button onClick={() => addRemoveWatchList(item._id)} style={{top:"-90px", left:"80px", cursor:"pointer", border:"none", backgroundColor:"transparent", color:"white"}}>
            <AiOutlineClose/>
            </Button>
          </Box>
          ))} 
      </Grid>
      </>
        )}
        </Flex>
      </Flex>
      </div>
    </div>
  );
}