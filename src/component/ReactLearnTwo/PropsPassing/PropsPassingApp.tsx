import React from 'react'
import PMParentComponent from './PassingMethodAsProps/PMParentComponent'
import PJPParentComponent from './PassingJSXAsProps/PJPParentComponent'
import PEParentComponent from './PassingEventsAsProps/PEParentComponent'
import PTCParentComponent from './ParentToChild/PTCParentComponent'
import DPParentComponent from './DestructuringProps/DPParentComponent'
import CTPParentComponent from './ChildToParent/CTPParentComponent'
function PropsPassingApp() {
  return (
    <React.Fragment>
      <CTPParentComponent />
      <DPParentComponent />
      <PTCParentComponent />
      <PEParentComponent />
      <PJPParentComponent />
      <PMParentComponent />
    </React.Fragment>
  )
}
export default PropsPassingApp
