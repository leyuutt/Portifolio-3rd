import { OrbitControls } from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'

const HeroExperience = () => {
    const isTablet=useMediaQuery({query: '(max-width: 1024px)'});

  return (
<Canvas className="size-full" camera={{ position: [0, 0, 5], fov: 45 }}>
<ambientLight intensity={0.2} color="#1a1a40" />
<directionalLight position={[5, 5, 5]} intensity={5} color="#ff7fbd" />
<OrbitControls
    enablePan={false}
    enableZoom={!isTablet}
    maxDistance={20}
    minDistance={5}
    minPolarAngle={Math.PI / 5}
    maxPolarAngle={Math.PI / 2}
/>


    <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff7fbd" />        
    </mesh>

</Canvas>

  )
}

export default HeroExperience
