import { AnimateType } from "./AnimateType/AnimateType"
import { AnimeJs } from "./AnimeJs/AnimeJs"
import { FramerMotion } from "./FramerMotion/FramerMotion"
import { ReactSpring } from "./ReactSpring/ReactSpring"

export const AnimationPackage = () => {
  return (
    <>
      <AnimeJs />
      <FramerMotion />
      <ReactSpring />
      <AnimateType />
    </>
  )
}