import { Stars } from "@react-three/drei"
export default function StarField() {
  return <Stars radius={60} depth={40} count={6000} factor={4} fade />
}