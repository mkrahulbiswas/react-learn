import React from "react";
import { CommonContext } from "../Layout/CommonCBPCC";
import { Button } from "react-bootstrap";

class CBPCCHome extends React.Component {
  render(): React.ReactNode {
    return (
      <CommonContext.Consumer>
        {(dataPass: any) => (
          <div className="pb-2">
            <span>CBPCC: </span>
            <Button onClick={() => { dataPass.updateColor('red') }}>Update Color Red</Button>
            <Button className="ms-1" onClick={() => { dataPass.updateColor('green') }}>Update Color Green</Button>
            <Button className="ms-1" onClick={() => { dataPass.updateColor('yellow') }}>Update Color Yellow</Button>
          </div>
        )}
      </CommonContext.Consumer>
    )
  }
}
export default CBPCCHome;