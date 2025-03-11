import { AnimateType } from "./AnimateType/AnimateType"
import { BootstrapType } from "./BootstrapType/BootstrapType"
import { StyledComponentsType } from "./StyledComponentsType/StyledComponentsType"
import { TailwindType } from "./TailwindType/TailwindType"

export const AnimationPackage = () => {
  return (
    <>
      <AnimateType />
      <TailwindType />
      <BootstrapType />
      <StyledComponentsType />
    </>
  )
}