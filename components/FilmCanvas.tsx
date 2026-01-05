import { Canvas } from "@react-three/fiber"
import StarField from "./StarField"
import CameraRig from "./CameraRig"
import Fog from "./Fog"

export default function FilmCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
      <color attach="background" args={["#000"]} />
      <fog attach="fog" args={["#000", 6, 40]} />
      <StarField />
      <CameraRig />
      <Fog />
    </Canvas>
  )
}
