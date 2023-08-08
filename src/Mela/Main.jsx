

import React from "react";
import { useState } from "react";
import './Main.css'
import Module_Mela from "./Module_Mela";
import Mela_img from '../assets/Mela_img.jpg';
import menu_bar  from '../assets/Vector.svg'
function Main() {
  const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    };
 return (
 
   <div className="main">
     { modalOpen &&  <Module_Mela setModalOpen={setModalOpen}></Module_Mela> }
   <div style={{
    width: '40%',
    height: '100%',
  //  backgroundColor: 'blue',
    marginRight: '6vw',
       display: 'flex',
       flexDirection: 'column',
       alignItems:'flex-end',
  
    justifyContent:'space-between',
    
   }}>
    <div style={{
     width: '80%',
     height: '20%',
   // backgroundColor: 'yellow',
     marginTop: '5vh',
     display: 'flex',
         justifyContent:'flex-end'
    
    }} >
     <div style={{
      width: '60px',
      height: '60px',
      //backgroundColor: 'pink',
      display: 'flex'
    
     // display: 'flex',
      //justifyContent: 'center',
     
     }}>
      <div style={{
       display: 'flex',
       justifyContent: 'center',
       alignSelf:'center'
      }}>
             <img
               onClick={showModal}
               src={menu_bar} />
      </div>
      
      
</div>

    </div>
       <div style={{
         width: '50%',
         height: '50%',
        // backgroundColor: 'saddlebrown',
         display: 'flex',
         flexDirection:'column'
       }}
       
       >
         <div style={{
           width: '100%',
           height: '13%',
           //backgroundColor: 'black',
           display: 'flex',
           alignItems: 'center',
           justifyContent:'flex-end'
         }}>
           <p className="Main_title"> Mela!</p>

         </div>
             <div style={{
           width: '100%',
         height:'13%',
          // backgroundColor: 'black',
           display: 'flex',
           alignItems: 'center',
           justifyContent:'flex-end'
         }}>
           <p className="Main_p">Release on 23 May 28</p>

         </div>
            <div style={{
           width: '100%',
         height:'30%',
           display: 'flex',
          justifyContent:'flex-end'
         }}>
           <div style={{
             width: '70%',
             height: '100%',
              backgroundColor: 'skyblue'
           }}> 
             
             <img
               style={{
                 width: '100%',
               height:'100%'}}
               src={Mela_img} />

           </div>
           
         </div>
         <div style={{
           width: '100%',
           height: '13%',
            display: 'flex',
           alignItems: 'center',
               justifyContent:'flex-end'
          // backgroundColor: 'yellow'
         }}>
           <p className="Main_p"> Goods</p>
         </div>
         <div style={{
           width: '100%',
           height: '13%',
              display: 'flex',
           alignItems: 'flex-start',
               justifyContent:'flex-end'
         }}>
           <p
             className="Main_p"> FanClub</p>
        </div>

        </div>
     </div>
     <div style={{
       width: '20px',
       borderRadius:'10px',
       height: '60px',
       backgroundColor: 'rgba( 255, 255, 255, 0.3 )',
       position: 'absolute',
       bottom: '3vh',
       display: 'flex',
       justifyContent: 'center',
       alignItems:'center',
       right: '50%',
       // position:'relative'
       
     }}>
       <div style={{
         width: "1.5px",
         height: '50px',
         backgroundColor: 'white',
         position: 'relative',
         zIndex:1
            ,  position: 'relative',
       }}>
        
         
       </div>
        <div  className="Main_Scroll">
           
         </div>
     </div>
   </div>
 

 )
}
export default Main