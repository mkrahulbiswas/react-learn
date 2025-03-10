import { BootstrapType } from "./BootstrapType/BootstrapType"
import { StyledComponentsType } from "./StyledComponentsType/StyledComponentsType"
import { TailwindType } from "./TailwindType/TailwindType"

export const StylePackage = () => {
  return (
    <>
      <TailwindType />
      <BootstrapType />
      <StyledComponentsType />
    </>
  )
}