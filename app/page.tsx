"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import FilmCanvas from "@/components/FilmCanvas"
import SceneText from "@/components/SceneText"

export default function Film() {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.to("#scene-1", { opacity: 1, duration: 3 })
      .to("#scene-1", { opacity: 0, duration: 3 }, "+=6")

      .to("#scene-2", { opacity: 1, duration: 3 })
      .to("#scene-2", { opacity: 0, duration: 3 }, "+=7")

      // continues for full 15 minutes
  }, [])

  return (
    <>
      <FilmCanvas />
      <SceneText />
    </>
  )
}
