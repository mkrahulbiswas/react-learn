import React from 'react'
import './StateApp.css'
import StateWithObjectFunctional from './StateWithObject/StateWithObjectFunctional'
function StateApp() {
  return (
    <React.Fragment>
      {/* <StateInFunctionalComponent /> */}
      {/* <StateInClassComponent /> */}
      {/* <PreviousStateInFunctionalComponent /> */}
      {/* <PreviousStateInClassComponent /> */}
      <StateWithObjectFunctional />
    </React.Fragment>
  )
}
export default StateApp