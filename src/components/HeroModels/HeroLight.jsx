import * as THREE from 'three'

const HeroLight = () => {
  return (
  <>
 
  <spotLight 
  position={[2, 5, 6]}
  angle={0.15}
  penumbra={0.5} 
  intensity={103}
   color="#3fcbf6" 
   />
  <spotLight 
  position={[-3, 5, 5]}
  angle={0.9}
  penumbra={1} 
  intensity={70}
   color="#9d4edd" 
   />

   <primitive
   object={new THREE.RectAreaLight('#A259FF', 8, 3 ,2)}
    position={[2, 3, 6]}
    intensity={16}
    rotation={[-Math.PI / 4, Math.PI / 4, 0]}

    />
        
   <pointLight
    position={[1, 2, 2]}
    intensity={14}
    color="#7209b7"
    />
   <pointLight
    position={[1, 2, -4]}
    intensity={10}
    color="#0d00a4"
    />
  </>
  )
}

export default HeroLight
