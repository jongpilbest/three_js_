import { Canvas } from "@react-three/fiber"
import './Main.css'
import React from "react";
import Right from '../assets/right.svg'
import spotify from '../assets/mdi_spotify.svg'
import apple from '../assets/ic_baseline-apple.svg'
import mdi_youtube from '../assets/mdi_youtube.svg'
import Album from './Three/Album';
const Discograph_inn = function () {
 return (
  <div className="Dis_Main">
   <div style={{
    width: '100vw',
    height: '15vh',
   
   }}>
   <video style={{ display:'none'}}  id="video" src="/mela.mp4"> </video>

   <div style={{
        width: '50px',
     height: '50px',
   
     position: 'absolute',
     right: '6vw',
     top:'4vw'
      
    }}>
     <img
  
      

               style={{
                 width: '100%',
               height:'100%'}}
               src={Right} />
   </div>
    
   </div>
     <div style={{ width: '100%', height: '65vh', position:'relative' }}>
       
       <Canvas >
          <Album></Album>
   </Canvas>
    



   </div>
   <div style={{
    width: '100%', display: 'flex', height: '20vh'
    , justifyContent: 'center',
  flexDirection:'column', alignItems:'center'
   }}>
    <p className='Dis_p'>Merry go Round</p>
    <p className="Dis__PP">2023.01.15</p>
    <div style={{
     display:'flex',justifyContent:'space-between',
     width: '8%', height: '50px', 
    }}>
     
 <div style={{
       width: '35px',
       height:'35px'
       
      }}>
       <img
       
               style={{
                 width: '100%',
               height:'100%'}}
               src={mdi_youtube} />
     </div>
      <div style={{
       width: '35px',
       height:'35px'
       
      }}>
       <img
       
               style={{
                 width: '100%',
               height:'100%'}}
               src={spotify} />
     </div>
       <div style={{
       width: '35px',
       height:'35px'
       
      }}>
       <img
       
               style={{
                 width: '100%',
               height:'100%'}}
               src={apple} />
      </div>
    </div>
   </div>
  </div>
 )
}

export default Discograph_inn