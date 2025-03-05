import React from "react";
import { CommonContext } from "../Layout/CommonCBPCC";

class CBPCCFooter extends React.Component {
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
          <h1 style={{ backgroundColor: dataPass.color }}>Footer</h1>
        )}
      </CommonContext.Consumer>
    )
  }
}
export default CBPCCFooter;