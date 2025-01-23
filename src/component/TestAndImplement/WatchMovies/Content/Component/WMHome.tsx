import React from 'react'
import WMStudent from './WMStudent'
function WMHome() {
  return (
    <React.Fragment>
      <div className='main_student'>
        <div className='sub_student'>
          <div className='std_top'>
            <div className="std_heading">
              <span>List of all student</span>
            </div>
            <div className="std_action"></div>
          </div>
          <div className='std_middle'>
            <div className="std_list">
              <WMStudent />
              <WMStudent />
              <WMStudent />
              <WMStudent />
            </div>
          </div>
          <div className='std_bottom'>
            <div className="std_count">
              <span>Total 30 student showing</span>
            </div>
            <div className="std_pagination"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default WMHome
