import { AnimateType } from "./AnimateType/AnimateType"
import { AnimeJsType } from "./AnimeJsType/AnimeJsType"
import { FramerMotionType } from "./FramerMotionType/FramerMotionType"
import { ReactSpringType } from "./ReactSpringType/ReactSpringType"

export const AnimationPackage = () => {
  return (
    <>
      <AnimeJsType />
      <FramerMotionType />
      <ReactSpringType />
      <AnimateType />
    </>
  )
}