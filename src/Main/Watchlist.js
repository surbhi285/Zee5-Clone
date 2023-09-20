import { useEffect, useState, useParams } from "react";
import { Container } from "@chakra-ui/react";

export default function Watchlist({userDetail}) {
    const[watchlist, setWatchList] = useState({});
    const [loading, setLoading] = useState(true);
   
    async function getWatchList (){
      const userInfo = localStorage.getItem("signup")
      if (userInfo){
        const userDetail = JSON.parse(userInfo);
        console.log(userDetail);
        const response = await(fetch("https://academics.newtonschool.co/api/v1/ott/watchlist/like",
            {
                method: 'GET',
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${userDetail.sign.token}`,
                    'projectId': "8jf3b15onzua",
                }
            }))
            
      console.log(response);
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

  useEffect(() => {
    getWatchList();
  }, []);
    return (
      <div style={{marginTop:"10rem"}}>
      {loading ? (
        <div>loading..</div>
      ) : (
        <Container sx={{ marginTop: "10rem" }}>
          {watchlist.map((item) => (
            <div key={item._id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </Container>
      )}
      </div>
    );
}