import React from 'react'
import './WMLayout.scss'
import WMHeader from '../Include/WMHeader'
import WMFooter from '../Include/WMFooter'
import WMContent from '../Content/WMContent'
function WMLayout() {
  return (
    <React.Fragment>
      <div className='wm_main'>
        <WMHeader />
        <WMContent />
        <WMFooter />
      </div>
    </React.Fragment>
  )
}
export default WMLayout
