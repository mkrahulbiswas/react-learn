import React from "react";
import { MCCommonContextProvider } from "../Context/MCommonContext";
import { MCColorContextProvider } from "../Context/MColorContext";
import { MCHome } from "../Component/MCHome";
import { MCAbout } from "../Component/MCAbout";
import { MCHeader } from "../Component/MCHeader";
import { MCHomeContextProvider } from "../Context/MCHomeContext";
import { MCAboutContextProvider } from "../Context/MCAboutContext";

function MCLayout() {
  return (
    <React.Fragment>
      <MCCommonContextProvider>
        <p>Hear you san see two <b>context</b> are defined and <b>one is present inside another</b> like <b>parent child</b></p>
        <div className="row">
          <div className="col-12">
            <MCHeader />
          </div>
          <MCColorContextProvider>
            <div className="col-6">
              <MCHomeContextProvider>
                <MCHome />
              </MCHomeContextProvider>
            </div>
            <div className="col-6">
              <MCAboutContextProvider>
                <MCAbout />
              </MCAboutContextProvider>
            </div>
          </MCColorContextProvider>
        </div>
      </MCCommonContextProvider>
    </React.Fragment>
  )
}
export default MCLayout;