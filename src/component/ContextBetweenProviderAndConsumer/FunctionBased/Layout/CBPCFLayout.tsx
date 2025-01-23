import React, { useState } from "react";
import CBPCFSidebar from "../include/CBPCFSidebar";
import CBPCFFooter from "../include/CBPCFFooter";
import CBPCFHeader from "../include/CBPCFHeader";
import CBPCFHome from "../Component/CBPCFHome";
import { CommonContext } from "./CommonCBPCF";
import './CBPCFLayout.scss'

function CBPCFLayout() {
  const [color, updateColor] = useState('green')
  function changeColor(color: string) {
    updateColor(color)
  }
  return (
    <React.Fragment>
      <CommonContext.Provider value={{ color: color, changeColor: changeColor }}>
        <div className="container">
          <div className="header">
            <header>
              <CBPCFHeader />
            </header>
          </div>
          <div className="body">
            <aside>
              <CBPCFSidebar />
            </aside>
            <section className="content">
              <CBPCFHome />
            </section>
          </div>
          <div className="footer">
            <CBPCFFooter />
          </div>
        </div>
      </CommonContext.Provider>
    </React.Fragment>
  )
}
export default CBPCFLayout;