import React from "react";
import { CommonContext } from "../Layout/CommonCBPCC";

class CBPCCSidebar extends React.Component {
  mainData: { counter: number; };
  constructor(props: object) {
    super(props);
    this.mainData = {
      counter: 0
    }
  }

  render(): React.ReactNode {
    return (
      <CommonContext.Consumer>
        {(dataPass: any) => (
          <h1 style={{ backgroundColor: dataPass.color }}>Sidebar</h1>
        )}
      </CommonContext.Consumer>
    )
  }
}
export default CBPCCSidebar;