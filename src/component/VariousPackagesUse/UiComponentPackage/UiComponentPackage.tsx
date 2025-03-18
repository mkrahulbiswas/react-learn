import { AntDesignType } from "./AntDesignType/AntDesignType"
import { BootstrapType } from "./BootstrapType/BootstrapType"
import { MaterialUiType } from "./MaterialUiType/MaterialUiType"
import { PrimereactType } from "./PrimereactType/PrimereactType"
import { SemanticUiReactType } from "./SemanticUiReactType/SemanticUiReactType"

export const UiComponentPackage = () => {
  return (
    <>
      <SemanticUiReactType />
      <AntDesignType />
      <MaterialUiType />
      <PrimereactType />
      <BootstrapType />
    </>
  )
}