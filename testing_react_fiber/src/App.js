import './App.css';
import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { MapControls, Sky, Stars } from '@react-three/drei';
// import Learner from './components/Learner';
import Plane from './components/Plane';
import Snowman from './components/Snowman';
import SnowmanTutor from './components/SnowmanTutor';

function App() {
  const [speechText, setSpeechText] = useState("")
  return (
      <Canvas camera={{ position: [0, 0, 30], up: [0, 0, 1], far: 10000 }} style={{ position: 'absolute', width: '100%', height: '100%' }}>
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
        <Snowman rotation={[0,0,-Math.PI/2]} position={[-5,0,0]} setSpeechText={setSpeechText}></Snowman>
        <SnowmanTutor rotation={[0,0,Math.PI/2]} position={[5,0,0]} speechText={speechText}></SnowmanTutor>
        <Plane></Plane>
        </Suspense>
        <MapControls />
      </Canvas>
        );
}

export default App;
