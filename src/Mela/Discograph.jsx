import './Main.css'
import React from "react";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
const Discograph = function () {
  
 return (
  <div style={{
   width: '100vw',
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',

 
  }}>
   <div style={{
    marginRight: '10vw',
    width: '100vw',
    height: '20vh',
  
    display: 'flex',

    flexDirection:'column'
   }}>
      <p className='Top_p'> Discograph</p>
    <div style={{
     width: '50%',
     height: '10vh',
  
     display:'flex'
    }}>
     
       <div style={{
     width: '3%',
      height: '100%',
      marginLeft: '8vw',

      
     }}>
      <p
       className='dis_name'
       style={{
        textAlign:'start'
      }}> All</p>
     </div>
     <div style={{ width: '30px'}}>
      <p>/</p>
      </div>

        <div style={{
     width: '6%',
      height: '100%',
   
    
     }}>
         <p
       className='dis_name'
       style={{
        textAlign:'start'
      }}> Single</p>
     </div>
      <div style={{ width: '30px'}}>
      <p>/</p>
      </div>
   <div style={{
     width: '6%',
      height: '100%',
    
   
     }}>
       <p
       className='dis_name'
       style={{
        textAlign:'start'
      }}> Album</p>
     </div>
       <div style={{ width: '30px'}}>
      <p>/</p>
     </div>
     
      <div style={{
     width: '6%',
      height: '100%',
    
   
     }}>
       <p
       className='dis_name'
       style={{
        textAlign:'start'
      }}> Digital</p>
     </div>
      </div>
   </div>
   <div style={{
        width: '100vw',
    height: '70vh',
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent:'space-between'
  
   }}>
   
   </div>
  
 
  </div>
 )
}
export default Discograph;