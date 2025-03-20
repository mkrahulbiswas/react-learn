import { BootstrapType } from "./BootstrapType/BootstrapType"
import { ChromaJsType } from "./ChromaJsType/ChromaJsType"
import { StyledComponentsType } from "./StyledComponentsType/StyledComponentsType"
import { TailwindType } from "./TailwindType/TailwindType"

export const StylePackage = () => {
  return (
    <>
      <ChromaJsType />
      <TailwindType />
      <BootstrapType />
      <StyledComponentsType />
    </>
  )
}