import { OrbitControls } from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Room } from '../HeroModels/Room'

import HeroLight from './HeroLight'

const HeroExperience = () => {
    const isTablet=useMediaQuery({query: '(max-width: 1024px)'});
    const isMobile=useMediaQuery({query: '(max-width: 768px)'});

    const cameraZ = isMobile ? 8 : isTablet ? 6.5 : 5
    const roomScale = isMobile ? 0.62 : isTablet ? 0.78 : 1
    const roomY = isMobile ? -2.6 : isTablet ? -3 : -3.5

  return (
<Canvas
  key={isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}
  className="size-full"
  dpr={[1, 1.5]}
  camera={{ position: [0, 0, cameraZ], fov: 45 }}
>

<OrbitControls
    enablePan={false}
    enableZoom={!isTablet}
    target={[0, -1, 0]}
    maxDistance={20}
    minDistance={5}
    minPolarAngle={Math.PI / 5}
    maxPolarAngle={Math.PI / 2}
/>
    <HeroLight />
    <group
    scale={roomScale}
    position={[0, roomY, 0]}
    rotation={[-0.01, Math.PI/4, 0]}
    >
        <pointLight
          position={[-1.75, 2.5, -1.94]}
          intensity={2}
          distance={5}
          decay={2}
          color="#fff8f2"
        />
        <Room/>
        
    </group>
   

</Canvas>

  )
}

export default HeroExperience
