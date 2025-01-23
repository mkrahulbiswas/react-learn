import React from 'react'
import FormSubmitControlledWay from './ControlledElement/FormSubmitControlledWay/FormSubmitControlledWay'
import ControlledElement from './ControlledElement/ControlledElement'
import UncontrolledElement from './UncontrolledElement/UncontrolledElement'
import FormSubmitUncontrolledWay from './UncontrolledElement/FormSubmitUncontrolledWay/FormSubmitUncontrolledWay'
function ControlledVsUncontrolledApp() {
  return (
    <React.Fragment>
      <p>This is an example of uncontrolled element:</p>
      <ControlledElement />
      <FormSubmitControlledWay />
      <UncontrolledElement />
      <FormSubmitUncontrolledWay />
    </React.Fragment>
  )
}
export default ControlledVsUncontrolledApp
