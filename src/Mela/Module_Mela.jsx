
import './Main.css'
import M_insta from '../assets/mdi_instagram.svg'
import M_twiter from '../assets/mdi_twitter.svg'
import Right from '../assets/right.svg'
import M_youtube from '../assets/mdi_youtube.svg'
const Module_Mela = function ({setModalOpen}) {
 
  const closeModal = () => {
        setModalOpen(false);
    };
 return (
  <div style={{
   width: '100vw',
   height: '100vh',
   position: 'absolute',
   zIndex:4,
     backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
   display: 'flex',
   flexDirection: 'row',
 
  }}>
   <div style={{
    width: '50%',
    height: '100vh',
    marginLeft: '5vw',
  
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'

   }}>
    <div style={{
     width: '80%',
     height:'80%',
    
    }}>
     <div style={{
      width: '100%',
      height: '15%',
     
      marginTop: '20%',
      display: 'flex',
      alignItems:'center'
     
     }}>
    <p className="Module_p">HOME</p>

     </div>
      <div style={{
      width: '100%',
      height: '15%',
       display: 'flex',
      alignItems:'center',
     
     }}>

          <p className="Module_p">DISC MEMORY</p>
     </div>
      <div style={{
      width: '100%',
      height: '15%',
            display: 'flex',
      alignItems:'center',
     
     }}>
  <p className="Module_p">INFORMATION</p>

     </div>
      <div style={{
      width: '100%',
      height: '15%',
             display: 'flex',
      alignItems:'center',
     }}>
  <p className="Module_p">PROFILE</p>

     </div>
     <div style={{
      width: '30%',
      height: '10%',
      marginTop:'10%',
      display: 'flex',
      justifyContent:'space-between'
     }}>
      <div style={{
       width: '35px',
       height:'35px'
       
      }}>
       <img
        onClick={() => window.open('https://twitter.com/ryokushaka', '_blank')}
               style={{
                 width: '100%',
               height:'100%'}}
               src={M_twiter} />
      </div>
        <div style={{
       width: '35px',
       height:'35px'
       
      }}>
       <img
        onClick={() => window.open('https://www.instagram.com/ryokushaka_official/', '_blank')}
               style={{
                 width: '100%',
               height:'100%'}}
               src={M_insta} />
      </div>
      <div
       
       style={{
       width: '35px',
       height:'35px'
        
      }}>
       <img
        onClick={() => window.open('https://www.youtube.com/channel/UC_1GPhYlXI2ka2ji5gnqWFQ', '_blank')}
      
               style={{
                 width: '100%',
               height:'100%'}}
               src={M_youtube} />
      </div>
     </div>

    </div>


   </div>
      <div style={{
    width: '50%',
    height: '100%',

 
   }}>
    <div style={{
        width: '50px',
     height: '50px',
   
     position: 'absolute',
     right: '6vw',
     top:'4vw'
      
    }}>
     <img
      onClick={closeModal}
      

               style={{
                 width: '100%',
               height:'100%'}}
               src={Right} />
    </div>

   </div>
   
   </div>


)

}

export default Module_Mela;