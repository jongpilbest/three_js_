import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Canvas } from '@react-three/fiber';
import './index.css'
import Profile from './Mela/Profile.jsx';
import Main from './Mela/Main.jsx';
import Discograph from './Mela/Discograph.jsx';
import Discograph_inn from './Mela/Discograph_inn.jsx';
//import Custom from './Component/Custom.jsx';
//import Experience from './Component/Experience.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{
      overflowY: 'scroll',
      width: '100vw',
      height: '100vh',
      overflowX:'hidden'
    }}>


    <Main></Main>
      <Discograph></Discograph>
      <Discograph_inn></Discograph_inn>
      <Profile></Profile>
    </div>     
    {/*
      <Canvas
        orthographic
        camera={{
          fov: 45,
          zoom: 100,
          near: 0.1,
          far: 200,
          position: [3, 2, 6]
        }
        }>
        <Experience></Experience>
        <Custom></Custom>
    </Canvas>
    */
      
    }

  </React.StrictMode>,
)
