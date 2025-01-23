import React, { useState } from 'react'
import './MakingToggleSwitch.css'
import { FaToggleOff, FaToggleOn } from 'react-icons/fa'
function MakingToggleSwitch() {
  const [isOn, setIsOn] = useState(false)
  const changeMode = () => {
    setIsOn(!isOn)
  }
  return (
    <React.Fragment>
      <div className='main_toggle_btn'>
        <div className={'sub_toggle_btn ' + (isOn ? 'active_sub_toggle_btn' : '')} onClick={() => changeMode()}>
          <div className={'toggle_btn ' + (isOn ? 'active_toggle_btn' : '')}>
            <span>{isOn ? <FaToggleOn /> : <FaToggleOff />}</span>
          </div>
        </div>
        <hr />
      </div>
    </React.Fragment>
  )
}
export default MakingToggleSwitch
