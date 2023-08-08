
import { useFrame,extend,useThree } from '@react-three/fiber'
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
extend({ OrbitControls: OrbitControls })



function Experience() {
 const { camera, gl } = useThree()
   const cubeRef = useRef()
   
 useFrame((state, delta) => {
   cubeRef.current.rotation.y += delta
  
/*
   const angle = state.clock.elapsedTime
    state.camera.position.x = Math.sin(angle) * 8
    state.camera.position.z = Math.cos(angle) * 8
    state.camera.lookAt(0, 0, 0)
    */

 })
 
  
 return (
  <>
     {<orbitControls args={[camera, gl.domElement]} /> }
  <directionalLight />
        <ambientLight intensity={ 0.5 } />
    <group>

     <mesh position-x={ - 2 }>
    <sphereGeometry />
    <meshStandardMaterial color="orange" />
</mesh>

<mesh ref={cubeRef} rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
    <boxGeometry />
    <meshStandardMaterial color="mediumpurple" />
</mesh>

<mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
    <planeGeometry />
    <meshStandardMaterial color="greenyellow" />
     </mesh>
     </group>
 
   
   </>
 )
}
export default Experience;