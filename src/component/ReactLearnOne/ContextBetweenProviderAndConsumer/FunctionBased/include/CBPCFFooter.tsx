import { CommonContext } from "../Layout/CommonCBPCF";
function CBPCFFooter() {
  return (
    <CommonContext.Consumer>
      {(dataPass: any) => (
        <h1 style={{ backgroundColor: dataPass.color }}>Footer</h1>
      )}
    </CommonContext.Consumer>
  )
}
export default CBPCFFooter;