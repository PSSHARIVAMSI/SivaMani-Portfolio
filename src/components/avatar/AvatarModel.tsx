import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { type MorphValues } from './useLipSync'

interface AvatarModelProps {
  morphValues: MorphValues
  url: string
}

const MORPH_MESHES = ['Wolf3D_Head', 'Wolf3D_Teeth']

export function AvatarModel({ morphValues, url }: AvatarModelProps) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF(url)
  const { actions, names } = useAnimations(animations, group)

  // Play idle animation if available
  useEffect(() => {
    const idle = names.find((n) => /idle/i.test(n)) ?? names[0]
    if (idle && actions[idle]) {
      actions[idle]!.play()
    }
  }, [actions, names])

  // Apply morph targets each frame
  useFrame(() => {
    if (!scene) return
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      if (!MORPH_MESHES.includes(obj.name)) return
      if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) return

      Object.entries(morphValues).forEach(([key, value]) => {
        const idx = mesh.morphTargetDictionary![key]
        if (idx === undefined) return
        mesh.morphTargetInfluences![idx] = THREE.MathUtils.lerp(
          mesh.morphTargetInfluences![idx],
          value,
          0.35
        )
      })
    })

    // Gentle floating
    if (group.current) {
      group.current.position.y = Math.sin(Date.now() * 0.001) * 0.03
    }
  })

  return <primitive ref={group} object={scene} scale={1.8} position={[0, -1.7, 0]} />
}
