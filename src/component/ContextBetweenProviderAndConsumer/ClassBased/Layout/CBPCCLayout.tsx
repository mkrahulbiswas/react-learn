import React from "react";
import CBPCCSidebar from "../include/CBPCCSidebar";
import CBPCCHeader from "../include/CBPCCHeader";
import CBPCCFooter from "../include/CBPCCFooter";
import './CBPCCLayout.scss'
import { CommonContext } from "./CommonCBPCC";
import CBPCCHome from "../Component/CBPCCHome";

class CBPCCLayout extends React.Component {
  updateColor: any;
  constructor(props: object) {
    super(props);
    this.updateColor = (color: any) => {
      this.setState({ color: color })
    }
    this.state = {
      color: 'green',
      updateColor: this.updateColor
    }
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <CommonContext.Provider value={this.state}>
          <div className="container">
            <div className="header">
              <header>
                <CBPCCHeader />
              </header>
            </div>
            <div className="body">
              <aside>
                <CBPCCSidebar />
              </aside>
              <section className="content">
                <CBPCCHome />
              </section>
            </div>
            <div className="footer">
              <CBPCCFooter />
            </div>
          </div>
        </CommonContext.Provider>
      </React.Fragment>
    )
  }
}
export default CBPCCLayout;