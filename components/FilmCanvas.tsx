import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import CameraRig from "./CameraRig"

export default function FilmCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
      <color attach="background" args={["#000"]} />
      <fog attach="fog" args={["#000", 5, 30]} />
      <Stars radius={50} depth={40} count={4000} factor={4} fade />
      <CameraRig />
    </Canvas>
  )
}