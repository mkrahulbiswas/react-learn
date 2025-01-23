import React from 'react'
import './PCLayout.scss'
import PCHeader from '../Include/PCHeader'
import PCContent from '../Content/PCContent'
import PCFooter from '../Include/PCFooter'
function PCLayout() {
  return (
    <React.Fragment>
      <div className='wm_main'>
        <PCHeader />
        <PCContent />
        <PCFooter />
      </div>
    </React.Fragment>
  )
}
export default PCLayout
