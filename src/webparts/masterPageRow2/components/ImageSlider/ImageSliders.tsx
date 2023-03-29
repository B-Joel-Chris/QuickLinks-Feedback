// import "bootstrap/dist/css/bootstrap.min.css";
// import "../MasterPageRow2.scss";
// import Carousel from "react-bootstrap/Carousel";

// import * as React from "react";

// const ImageSliders = (props: any) => {
//   return (
//     <>
//     <div>Slider</div>
//       <Carousel  variant="dark">
//         {props.data &&
//           props.data?.map((x: any,i:number) => {
//             let y = [];
//             let carouselstyle='';
//             console.log("hi");
//             console.log(x.image);
//             y = JSON.parse(x.image);
//             console.log(y);
//             console.log(y.serverUrl + y.serverRelativeUrl);
//             const actualsrc = y.serverUrl + y.serverRelativeUrl;
          
          
//               carouselstyle="carousel-item active"
            
            
        
            
//             return(
//               <>
           
//             <Carousel.Item className={carouselstyle} interval={500} key={actualsrc.id} >
             
//             <div className={carouselstyle}>
//               <img
//                 className="d-block w-100"
//                 src={actualsrc}
//                 height={200}
//                 width={200}
//                 alt="First slide"
//               />
          
          
//           </div> 
//               <Carousel.Caption>
//                 <h5>{x.Title}</h5>
//                 <p>
//                   Nulla vitae elit libero, a pharetra augue mollis interdum.
//                 </p>
//               </Carousel.Caption>
              
      
//             </Carousel.Item>
          
    
         
//             </>
//             )
//           })}
//       </Carousel>
     
//     </>
//   );
// };

// export default ImageSliders;
import * as React from 'react'
import "../MasterPageRow2.scss";
import "./ImageSlider.scss"

 import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import "@pnp/sp/profiles";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";

export interface ISliderProps{
  data:any}


const ImageSliders = (props:ISliderProps) => {

console.log(props.data)
let arr:any[] = []

arr = props.data;
    
console.log(arr)

      return (
      
        <>
        
        <Slide>
        {props.data&& props.data.map((x:any)=>{
         return(<div className='each-slide'>
          <img src={x}/></div>)
        })}
       </Slide> 
   
       </>
      )
    
  }
export default ImageSliders;