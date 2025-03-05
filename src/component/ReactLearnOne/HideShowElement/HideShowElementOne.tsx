import { useState } from "react";

function HideShowElementOne() {
  const [status, setStatus] = useState(true)
  function setFalse() {
    setStatus(false)
  }
  function setTrue() {
    setStatus(true)
  }
  return (
    <div>
      {
        status ? <div>Now Showing</div> : <div>Now Hidden</div>
      }
      <hr />
      <button onClick={() => setFalse()}>Hide</button>
      <button onClick={() => setTrue()}>Show</button>
    </div>
  )
}

export default HideShowElementOne
