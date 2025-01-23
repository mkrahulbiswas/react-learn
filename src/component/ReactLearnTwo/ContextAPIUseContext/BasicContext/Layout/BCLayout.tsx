import React from "react";
import { BCHome } from "../Component/BCHome";
import { BCAbout } from "../Component/BCAbout";
import { BCCommonProvider } from "../Context/BCCommon";

function BCLayout() {
  return (
    <React.Fragment>
      <BCCommonProvider>
        <p>Hear you san see both <b>HOME</b> and <b>ABOUT</b> component are different but after making any change by any one both component is rerender</p>
        <div className="row">
          <div className="col-6">
            <BCHome />
          </div>
          <div className="col-6">
            <BCAbout />
          </div>
        </div>
      </BCCommonProvider>
    </React.Fragment>
  )
}
export default BCLayout;