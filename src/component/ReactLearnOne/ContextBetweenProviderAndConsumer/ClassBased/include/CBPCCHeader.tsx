import React from "react";
import { CommonContext } from "../Layout/CommonCBPCC";

class CBPCCHeader extends React.Component {
  render(): React.ReactNode {
    return (
      <CommonContext.Consumer>
        {(dataPass: any) => (
          <h1 style={{ backgroundColor: dataPass.color }}>Header</h1>
        )}
      </CommonContext.Consumer>
    )
  }
}
export default CBPCCHeader;