import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function CameraRig() {
  const ref = useRef<any>()

  useFrame((state) => {
    ref.current.position.x += (state.mouse.x * 2 - ref.current.position.x) * 0.02
    ref.current.position.y += (state.mouse.y * 2 - ref.current.position.y) * 0.02
  })

  return <group ref={ref} />
}
