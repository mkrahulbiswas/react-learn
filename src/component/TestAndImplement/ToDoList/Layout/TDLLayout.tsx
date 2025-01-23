import React from 'react'
import './TDLLayout.scss'
import TDLHeader from '../Include/TDLHeader'
import TDLFooter from '../Include/TDLFooter'
import TDLMain from '../Component/TDLMain'
function TDLLayout() {
  return (
    <React.Fragment>
      <div className='toDo_marge'>
        <TDLHeader />
        <TDLMain />
        <TDLFooter />
        <hr />
      </div>
    </React.Fragment>
  )
}
export default TDLLayout
