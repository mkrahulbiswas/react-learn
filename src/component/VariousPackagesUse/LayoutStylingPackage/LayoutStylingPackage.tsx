import { BootstrapType } from "./BootstrapType/BootstrapType"
import { ChromaJsType } from "./ChromaJsType/ChromaJsType"
import { ReactGridLayoutType } from "./ReactGridLayoutType/ReactGridLayoutType"
import { StyledComponentsType } from "./StyledComponentsType/StyledComponentsType"
import { TailwindType } from "./TailwindType/TailwindType"

export const LayoutStylingPackage = () => {
  return (
    <>
      <ReactGridLayoutType />
      <ChromaJsType />
      <TailwindType />
      <BootstrapType />
      <StyledComponentsType />
    </>
  )
}