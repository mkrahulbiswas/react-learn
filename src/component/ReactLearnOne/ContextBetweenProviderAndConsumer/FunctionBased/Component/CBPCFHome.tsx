import { CommonContext } from "../Layout/CommonCBPCF";
import { Button } from "react-bootstrap";
function CBPCFHome(){
    return (
      <CommonContext.Consumer>
        {(dataPass: any) => (
          <div className="pb-2">
            <span>CBPCF: </span>
            <Button onClick={() => { dataPass.changeColor('red') }}>Update Color Red</Button>
            <Button className="ms-1" onClick={() => { dataPass.changeColor('green') }}>Update Color Green</Button>
            <Button className="ms-1" onClick={() => { dataPass.changeColor('yellow') }}>Update Color Yellow</Button>
          </div>
        )}
      </CommonContext.Consumer>
    )
}
export default CBPCFHome;