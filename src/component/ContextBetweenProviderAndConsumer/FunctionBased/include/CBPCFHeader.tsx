import { CommonContext } from "../Layout/CommonCBPCF";
function CBPCFHeader() {
  return (
    <CommonContext.Consumer>
      {(dataPass: any) => (
        <h1 style={{ backgroundColor: dataPass.color }}>Header</h1>
      )}
    </CommonContext.Consumer>
  )
}
export default CBPCFHeader;