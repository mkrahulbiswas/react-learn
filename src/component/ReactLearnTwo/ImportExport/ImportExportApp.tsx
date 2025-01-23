import IECombinedTypeOne, { IECombinedTypeThree, IECombinedTypeTwo } from "./CombinedType/IECombinedType"
import IEDefaultType from "./DefaultType/IEDefaultType"
import { IENamedTypeOne, IENamedTypeTwo } from "./NamedType/IENamedType"

function ImportExportApp() {
  return (
    <>
      <IEDefaultType />
      <IENamedTypeOne />
      <IENamedTypeTwo />
      <IECombinedTypeOne />
      <IECombinedTypeTwo />
      <IECombinedTypeThree />
    </>
  )
}
export default ImportExportApp
