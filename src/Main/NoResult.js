import React from 'react'
import sorryIcon from '../Assets/sorryIcon.jpg';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div style={{marginTop:"8rem"}}>
        <div style={{marginLeft:"5rem", marginTop:"5%",backgroundColor: 'rgba(41, 37, 45, 0.6)', height:"400px", width:"85%", borderRadius:"10px"}}>
       <h1 style={{color:"white", marginLeft:"25rem", paddingTop:"40px", letterSpacing:"2px"}}> SO SORRY ....<img src={sorryIcon} style={{width:"50px", height:"50px", borderRadius:"50%"}}/></h1>
     <h2 style={{color:"white", marginBottom:"30px", marginLeft:"23rem", paddingTop:"50px"}}> This feature is currently unavailable.</h2>
     <Link to='/'>
     <h2 style={{marginLeft:"10%", marginLeft:"30rem", paddingTop:"100px"}}>Back To Home</h2>
     </Link>
     </div>
    </div>
  )
}
