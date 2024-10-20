import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Hud, Text, OrbitControls, PerspectiveCamera, OrthographicCamera, Environment, RoundedBox, Cloud } from '@react-three/drei'
export default function App() {
  return (
    <Canvas>
      <mesh>
        <torusGeometry args={[1, 0.25, 32, 100]} />
        <meshStandardMaterial />
      </mesh>
      <Cloud />
      <Viewcube />
      <Hud renderPriority={2}>
        <PerspectiveCamera name="hudcam" makeDefault position={[0, 0, 20]} fov={25} />
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <SceneHUD />
        <mesh>
          <ringGeometry args={[0.2, 0.4]} />
          <meshBasicMaterial color="white" />
        </mesh>
      </Hud>
      <OrbitControls autoRotate />
      <Environment preset="dawn" background blur={0.75} />
    </Canvas>
  )
}

function Viewcube({ renderPriority = 1, matrix = new THREE.Matrix4() }) {
  const mesh = useRef(null)
  const { camera, size } = useThree()
  const [hover, set] = useState(null)

  useFrame(() => {
    // Spin mesh to the inverse of the default cameras matrix
    matrix.copy(camera.matrix).invert()
    mesh.current.quaternion.setFromRotationMatrix(matrix)
  })

  return (
    <Hud renderPriority={renderPriority}>
      <OrthographicCamera makeDefault position={[0, 0, 100]} />
      <mesh
        ref={mesh}
        position={[size.width / 2 - 100, size.height / 2 - 100, 0]}
        onPointerOut={(e) => set(null)}
        onPointerMove={(e) => set(Math.floor((e.faceIndex || 0) / 2))}>
        {[...Array(6)].map((_, index) => (
          <meshLambertMaterial attach={`material-${index}`} key={index} color={hover === index ? 'lightblue' : 'white'} />
        ))}
        <boxGeometry args={[50, 50, 50]} />
      </mesh>
      <ambientLight intensity={1} />
      <pointLight position={[200, 200, 100]} intensity={0.5} />
    </Hud>
  )
}

function SceneHUD() {
  // Having this hook inside the HUD will give us the vieport of the portal, not the default viewport
  const viewport = useThree((state) => state.viewport)
  return (
    <Text
      position={[-viewport.width / 2 + 0.1, -viewport.height / 2 + 0.1, 0]}
      letterSpacing={-0.04}
      lineHeight={0.9}
      anchorX="left"
      anchorY="bottom-baseline"
      fontSize={0.5}
      font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZs.woff"
      color="white"
      maxWidth="4">
      
    </Text>
  )
}
