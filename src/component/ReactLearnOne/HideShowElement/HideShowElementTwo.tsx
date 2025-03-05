import { useState } from "react";

function HideShowElementTwo() {
  const [status, setStatus] = useState(true)
  const [text, setTest] = useState('Hide Now')
  function changeType() {
    if (status === true) {
      setStatus(false)
      setTest('Show Now')
    } else {
      setStatus(true)
      setTest('Hide Now')
    }
  }
  return (
    <div>
      {
        status ? <div>Now Showing</div> : <div>Now Hidden</div>
      }
      <hr />
      <button onClick={() => changeType()}>{text}</button>
    </div>
  )
}

export default HideShowElementTwo
