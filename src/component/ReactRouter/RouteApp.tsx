import { BrowserRouter } from 'react-router'
import './RouteApp.css'
import BRPApp from './BestRoutingPractice/BRPApp'
import React from 'react'
function RouteApp() {
  return (
    <React.Fragment>
      {/* <RTApp /> */}
      {/* <LTApp /> */}
      {/* <NPFTApp /> */}
      {/* <PPApp /> */}
      {/* <SPApp /> */}
      {/* <NPApp /> */}
      {/* <NRApp /> */}
      {/* <ULApp /> */}
      {/* <PRApp /> */}
      <BrowserRouter basename='/brp'>
        <BRPApp />
      </BrowserRouter>
    </React.Fragment>
  )
}
export default RouteApp
