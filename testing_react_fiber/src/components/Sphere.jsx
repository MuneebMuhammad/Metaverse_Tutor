import React from 'react'

export default function Sphere(props) {
  return (
    <mesh {...props}>
        <sphereGeometry args={[0.5, 32, 16]}/>
        <meshStandardMaterial color={"green"}/>
    </mesh>
  )
}
