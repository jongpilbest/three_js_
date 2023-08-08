
import  './Main'
import React, { useCallback, useRef, useState } from "react"
const Pro_in = function ({ go }) {
 const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
 return (
  <div
 

   style={{
           width: '20%',
    height: '100%',
           position:'relative'
         
   }}>
   
    <div
     className="pro_f"
   >
   <p>dfdfd</p>
   </div>
  
   
   <div
    style={{
     width: '100%',
     height:'100%'
    }}
>
   <img
 
             style={{
                
                 width: '100%',
               height:'100%'}}
     src={go.image} />
    </div>
  <p style={{ textAlign:'center', fontSize:'16px'}}  className="Pro_p">{go.name}</p>
         </div>
 )
 
}

export default Pro_in