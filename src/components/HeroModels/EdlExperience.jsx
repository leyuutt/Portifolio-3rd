import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Edl } from './Edl'

const EdlExperience = () => {
  return (
    <Canvas
      className="size-full"
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.2, 5], fov: 35 }}
    >
      <ambientLight intensity={2} color="#fff4fa" />
      <directionalLight position={[4, 6, 5]} intensity={3} color="#ff91c1" />
      <directionalLight position={[-3, 2, 2]} intensity={1.5} color="#c78bff" />

      <Suspense fallback={null}>
        <Edl position={[0, -2.4, 0]} scale={2.2} />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0.2, 0]}
      />
    </Canvas>
  )
}

export default EdlExperience
