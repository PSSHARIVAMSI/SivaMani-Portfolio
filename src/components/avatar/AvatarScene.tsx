import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { AvatarModel } from './AvatarModel'
import { type MorphValues } from './useLipSync'

interface AvatarSceneProps {
  morphValues: MorphValues
  avatarUrl: string
}

export function AvatarScene({ morphValues, avatarUrl }: AvatarSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 2.2], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 3]} intensity={1.4} color="#00D4FF" />
      <pointLight position={[-2, 2, -2]} intensity={0.8} color="#7C3AED" />
      <Suspense fallback={null}>
        <AvatarModel morphValues={morphValues} url={avatarUrl} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
