import React from 'react'
import {useFrame} from '@react-three/fiber'
import { useRef } from 'react';


export default function Rectangle() {
    const mesh = useRef();
  
    useFrame((state, delta) => {
        mesh.current.position.x += 2
    })
  return (
    <mesh ref={mesh}>
        <boxGeometry/>
        <meshStandardMaterial color={"hotpink"}/>
    </mesh>
  )
}
