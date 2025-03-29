import { AntDesignType } from "./AntDesignType/AntDesignType"
import { BlueprintJsType } from "./BlueprintJsType/BlueprintJsType"
import { BootstrapType } from "./BootstrapType/BootstrapType"
import { ChakraUiType } from "./ChakraUiType/ChakraUiType"
import { FluentUiType } from "./FluentUiType/FluentUiType"
import { MaterialUiType } from "./MaterialUiType/MaterialUiType"
import { PrimereactType } from "./PrimereactType/PrimereactType"
import { SemanticUiReactType } from "./SemanticUiReactType/SemanticUiReactType"
import { SpectrumWebComponentsType } from "./SpectrumWebComponentsType/SpectrumWebComponentsType"

export const UiComponentPackage = () => {
  return (
    <>
      <BlueprintJsType />
      {/* <SpectrumWebComponentsType />
      <ChakraUiType />
      <FluentUiType />
      <SemanticUiReactType />
      <AntDesignType />
      <MaterialUiType />
      <PrimereactType />
      <BootstrapType /> */}
    </>
  )
}