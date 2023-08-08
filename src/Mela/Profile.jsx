
import React, { useRef } from "react"
import dan from '../assets/dan.jpg'
import mem1 from '../assets/mem1.jpg'
import mem2 from '../assets/mem2.jpg'

import mem3 from '../assets/mem3.jpg'

import mem4 from '../assets/mem4.jpg'
import M_insta from '../assets/mdi_instagram.svg'
import M_twiter from '../assets/mdi_twitter.svg'
const Profile = function () {
  const mem_ref = useRef();
  const mem_ref1 = useRef()
    const mem_ref2=useRef()
      const mem_ref3=useRef()

 return (
  <div style={{
   width: '100vw',
   height: '170vh',
   display: 'flex',
   flexDirection: 'column',

 
  }}>
   <div style={{
  
    width: '100vw',
    height: '10vh',
    marginBottom:'10vh',
    display: 'flex',

    flexDirection:'column'
   }}>
       <p className='Top_p'> Profile</p>
       
   </div>
 

  

 
 
 
     <div style={{
       width: '100vw',
       height:'65vh',
   
     
       display: 'flex',
       flexDirection:'row'
     }}>
       <div style={{
         width: '84vw',
         height: '100%',
     
         marginLeft: '8vw',
         marginRight:'9vw',
         display: 'flex',
         justifyContent:'space-between'
         
       }}>
         <div style={{ width: '65%', height: '100%' }}
         
         >
            <img
             style={{
                
                 width: '100%',
               height:'100%'}}
               src={dan} />

         </div>
         <div style={{  width:'33%',height: '100%', marginLeft: '1vw',justifyContent:'center' ,display:'flex',flexDirection:'column' }}>
           <div style={{ width: '100%', height: '40%' }}>
             
                 <p
       style={{
        fontSize:'20px',
        textAlign: 'center'
       }}
       className="Pro_p"> 愛知県出身4人組バンド。愛称は”リョクシャカ”。</p>
      <p style={{ color: 'black' }} className="Pro_p">高校の同級生(長屋晴子・小林壱誓・peppe)と、小林の幼馴染・穴見真吾によって2012年結成。2013年、10代限定ロックフェス『閃光ライオット』準優勝を皮切りに活動を本格化。以降、映画・ドラマ・CM・アニメなどの楽曲を多数手がける。2020年に発表した「Mela!」は、ストリーミング再生数が2億回を突破する代表曲に。結成10周年となる2022年には、初の日本武道館公演”緑黄色社会×日本武道館 “20122022””を成功させ、年末には「第73回NHK紅白歌合戦」初出場するなど躍進。2023年は、5月にアルバム「pink blue」リリースと、同月からスタートする全国ホールツアー”pink blue tour 2023"が控える。</p>

           </div>
          
       
          </div>
        
       </div>
     </div>
     <div style={{
       width: '100%', height: '30vh', display: 'flex', justifyContent: 'center',
     alignItems:'center'}}>
       <p className="Pro__P"> Member</p>
     </div>

     <div style={{
       width: '100vw',
       height: '45vh',
      
   
     
       display: 'flex',
       flexDirection:'row'
     }}>
       <div style={{
         width: '100%',
         height: '95%',
      
     
         marginLeft: '8vw',
         marginRight:'9vw',
         display: 'flex',
         flexDirection: 'row',
      
        justifyContent:'center'
     
      
         
       }}>
         <div style={{ width:'90%', height:'100%',display:'flex', justifyContent:'space-between'}}>
  
         <div style={{
           width: '20%',
           height: '100%',
           
         }}>
           <img
             style={{
                
                 width: '100%',
               height:'100%'}}
               src={mem1} />
             <p style={{ textAlign:'center', fontSize:'16px'}}  className="Pro_p"> 長屋 晴子</p>

         </div>
           <div
              onMouseLeave={()=>mem_ref1.current.style.display='none' }
             onMouseEnter={()=>mem_ref1.current.style.display='flex'}
             style={{
           width: '20%',
           height: '100%',
         
             }}>
             
            
            <img
             style={{
                
                 width: '100%',
               height:'100%'}}
               src={mem2} />
  <p style={{ textAlign:'center', fontSize:'16px'}}  className="Pro_p">peppe</p>
         </div>
           <div style={{
           width: '20%',
           height: '100%',
     
         }}>
            <img
             style={{
                
                 width: '100%',
               height:'100%'}}
               src={mem3} />
  <p style={{ textAlign:'center', fontSize:'16px'}}  className="Pro_p">小林 壱誓</p>
         </div>
           <div
             onMouseLeave={()=>mem_ref.current.style.display='none' }
             onMouseEnter={()=>mem_ref.current.style.display='flex'}
             style={{
           width: '20%',
           height: '100%',
           position:'relative'
           }}>
             <div
               ref={mem_ref}
               style={{
                 
                 width: '100%',
                 justifyContent: 'center',
                 alignItems: 'center',
                 flexDirection:'column'
                 , height: '100%', display: 'none', backgroundColor: 'rgba( 0, 0, 0, 0.6 )', position: 'absolute'
               }}>
             
               <div> <p className="Dis__PP"> Gt.  </p></div>
               <div style={{ width:'30%', display:'flex', justifyContent:'space-between'}} >
                <img src={M_twiter}></img>
               <img src={M_insta}></img>
               </div>
            
               
             
             </div>
            <img
             style={{
                
                 width: '100%',
               height:'100%'}}
               src={mem4} />
  <p style={{ textAlign:'center', fontSize:'16px'}}  className="Pro_p"> 穴見 真吾</p>
         </div>
         </div>
       </div>
       </div>
  </div>
 )

}

export default Profile