import React from "react";
import { CommonContext } from "../Layout/CommonCBPCM";
import { Button } from "react-bootstrap";

class CBPCMHome extends React.Component {
  render(): React.ReactNode {
    return (
      <CommonContext.Consumer>
        {(dataPass: any) => (
          <div className="pb-2">
            <span>CBPCM: </span>
            <Button onClick={() => { dataPass.changeColor('red') }}>Update Color Red</Button>
            <Button className="ms-1" onClick={() => { dataPass.changeColor('green') }}>Update Color Green</Button>
            <Button className="ms-1" onClick={() => { dataPass.changeColor('yellow') }}>Update Color Yellow</Button>
          </div>
        )}
      </CommonContext.Consumer>
    )
  }
}
export default CBPCMHome;