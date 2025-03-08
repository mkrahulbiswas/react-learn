import React, { useState } from "react";
import { CommonContext } from "./CommonCBPCM";
import CBPCMHeader from "../include/CBPCMHeader";
import CBPCMBanner from "../include/CBPCMBanner";
import CBPCMHome from "../Component/CBPCMHome";
import CBPCMFooter from "../include/CBPCMFooter";

function CBPCMLayout() {
  const [color, updateColor] = useState('green')
  function changeColor(color: string) {
    updateColor(color)
  }
  return (
    <React.Fragment>
      <CommonContext.Provider value={{ color: color, changeColor: changeColor }}>
        <div className="container">
          <header className="header">
            <CBPCMHeader />
          </header>
          <main className="main">
            <aside>
              <CBPCMBanner />
            </aside>
            <section className="content">
              <CBPCMHome />
            </section>
          </main>
          <footer className="footer">
            <CBPCMFooter />
          </footer>
        </div>
      </CommonContext.Provider>
    </React.Fragment>
  )
}
export default CBPCMLayout;