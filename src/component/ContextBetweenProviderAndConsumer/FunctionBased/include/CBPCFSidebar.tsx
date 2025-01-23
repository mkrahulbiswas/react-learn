import { CommonContext } from "../Layout/CommonCBPCF";
function CBPCFSidebar() {
  return (
    <CommonContext.Consumer>
      {(dataPass: any) => (
        <h1 style={{ backgroundColor: dataPass.color }}>Sidebar</h1>
      )}
    </CommonContext.Consumer>
  )
}
export default CBPCFSidebar;