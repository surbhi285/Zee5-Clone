import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import{Fade} from 'react-slideshow-image'

const slideImages = [
    {
    url: `https://aiptcomics.com/wp-content/uploads/2021/10/The-Fog-Remake-Pic-1.jpg` 
    },{
    url: 'https://www.pinballnews.com/site/wp-content/uploads/games/scooby-doo/000-scooby-doo-1024x576.jpg'
    },{
    url: 'https://i.ytimg.com/vi/U3-JDlf6L_s/maxresdefault.jpg'
    },{
    url:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3725BE637A7B0AC6BCA105FB560AA61FB1381191753FA4E741F83D7E071F6E7A/scale?width=1200&aspectRatio=1.78&format=jpeg'
    },{
    url:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4ebb8d686849cbc9855011150bc31a5c38b7fee334c6d908da83aba6a2a801a0._UY500_UX667_RI_TTW_.jpg'
    },{
   url: 'https://occ-0-56-32.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ4CzQsQ08HGNqvtf-Nad-I5_Umqsx2TYKAuC77A6mdHhmgWNT0i8iIlnLM3aMnRgALxfTyBcl3PevR1aR0TdxNa32f9rZCPzS96.jpg?r=b4f',
  }];
  
  const divStyle={
    display:"flex", 
    alignItems:"center", 
    justifyContent:"center", 
    backgroundSize: "cover",
    height: '450px',
    width: '90%',
    marginLeft: '10%',
    marginRight: 'px',
    backgroundRepeat:"no-repeat",
  }
//   const slideSettings = {
//     infinite: false, // Disable infinite looping
//   };

export default function ImageSlider() {
  return (
    <div style={{marginTop:"5rem"}}>
    <Fade>
        {slideImages.map((image, index)=>(
            <div key={index}>
                <div style={{...divStyle, backgroundImage: `url(${image.url})`, width:"80%"}}>

                </div>

            </div>

        ))}
    </Fade>
  </div>
  )
}
