import React from 'react'
import { RemoveUnwantedWrap } from './RemoveUnwantedWrap/RemoveUnwantedWrap'
import { ExplainComponent } from './ExplainComponent/ExplainComponent'
function ComponentsApp() {
  return (
    <React.Fragment>
      <RemoveUnwantedWrap />
      <ExplainComponent />
    </React.Fragment>
  )
}
export default ComponentsApp
