
import React, { useEffect } from "react"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useFrame,extend ,useThree} from "@react-three/fiber"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useRef } from "react"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'
extend({ OrbitControls: OrbitControls })
const Album = function () {
   var video = document.getElementById('video');
           video.muted = true;
video.play();
video.muted = false;

   const texture = new THREE.VideoTexture(video);
   texture.colorSpace = THREE.SRGBColorSpace;
   const groupRef = useRef()
  // const colorMap = useLoader(TextureLoader, '/mela.mkv');
   //console.log(colorMap)
  const { camera, gl } = useThree()
   const model = useLoader(GLTFLoader, '/cd4.glb');
   useFrame((state, delta) =>
{
    //cubeRef.current.rotation.y += delta
    groupRef.current.rotation.y += (delta/10)
})
 
 return (
    <>
  
      
       {<orbitControls args={[camera, gl.domElement]} ></orbitControls>}
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
    <ambientLight intensity={0.5} />
   <group ref={groupRef}>
    

    
      <mesh   position-x={ - 3}  position={ [ -1, 0, 0 ] }>
       <boxBufferGeometry attach="geometry" args={[1, 0.9,0.05]} />
    <meshBasicMaterial map={texture} />
</mesh>
  <mesh   position-x={ 3} position={ [ 1, 0, 0 ] }>
       <boxBufferGeometry attach="geometry" args={[1, 0.9,0.05]} />
    <meshBasicMaterial map={texture} />
     </mesh>
     </group>
       <primitive object={ model.scene } scale={3} />
   
  
  </>
 

 )

}

export default Album