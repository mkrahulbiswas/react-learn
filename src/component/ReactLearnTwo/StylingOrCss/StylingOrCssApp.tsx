import React from 'react'
import UsingStyledComponent from './UsingStyledComponent/UsingStyledComponent'
import UsingModule from './UsingModule/UsingModule'
import UsingCommonType from './UsingCommonType/UsingCommonType'
function StylingOrCssApp() {
  return (
    <React.Fragment>
      <UsingModule />
      <UsingCommonType />
      <UsingStyledComponent />
    </React.Fragment>
  )
}
export default StylingOrCssApp
