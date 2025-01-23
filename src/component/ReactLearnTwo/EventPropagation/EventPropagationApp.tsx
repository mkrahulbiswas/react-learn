import React from 'react'
import EPBubblingPhases from './EPBubblingPhases/EPBubblingPhases'
import EPCapturePhases from './EPCapturePhases/EPCapturePhases'
function EventPropagationApp() {
  return (
    <React.Fragment>
      <EPBubblingPhases />
      <EPCapturePhases />
    </React.Fragment>
  )
}
export default EventPropagationApp
