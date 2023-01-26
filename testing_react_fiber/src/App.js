import './App.css';
import { Suspense, useState, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MapControls, Sky, Stars } from '@react-three/drei';
// import Learner from './components/Learner';
import Plane from './components/Plane';
import Snowman from './components/Snowman';
import SnowmanTutor from './components/SnowmanTutor';
import Teacher from './components/Teacher';
import Student from './components/Student'

function App() {
  const [speechText, setSpeechText] = useState("")
  const gltf = useLoader(GLTFLoader, '/teacher.gltf')
  const gltfClass = useLoader(GLTFLoader, '/classRoom.gltf')
  const mixerRef = useRef();
  return (
      <Canvas camera={{ position: [0, 0, 7], up: [0, 0, 1], far: 10000 }} style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Suspense fallback={null}>
      <Sky
					distance={450000}
					sunPosition={[0, 1, 0]}
					inclination={0}
					azimuth={0.25}
				/>
      <Stars
					radius={200} // Radius of the inner sphere (default=100)
					depth={100} // Depth of area where stars should fit (default=50)
					count={5000} // Amount of stars (default=5000)
					factor={10} // Size factor (default=4)
					saturation={0} // Saturation 0-1 (default=0)
					fade // Faded dots (default=false)
				/>
        <ambientLight intensity={0.75} />
        <directionalLight color="red"/>
        {/* <Snowman rotation={[0,0,-Math.PI/2]} position={[-5,0,0]} setSpeechText={setSpeechText}></Snowman>
        <SnowmanTutor rotation={[0,0,Math.PI/2]} position={[5,0,0]} speechText={speechText}></SnowmanTutor> */}
        <Teacher rotation={[Math.PI/2, Math.PI/2, 0]} position={[-9, -2,0]} scale={1.75} speechText={speechText}></Teacher>
        <Student rotation={[-Math.PI/2, -Math.PI/2, Math.PI]} position ={[-4,-1, 0]} scale={2} setSpeechText={setSpeechText}></Student>
        <primitive object={gltfClass.scene} rotation={[Math.PI/2, 0, 0]}/>
        {/* <primitive ref={mixerRef} object={gltf.scene} rotation={[Math.PI/2, Math.PI/2, 0]} position={[-9, -2,0]} scale={1.75}/> */}
        {/* <animationMixer ref={mixerRef} clips={gltf.animations} /> */}
        <Plane></Plane>
        </Suspense>
        <MapControls />
      </Canvas>
        );
}

export default App;
