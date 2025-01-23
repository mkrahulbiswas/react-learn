import { useState } from "react"
import ChildComponentOne from "./ChildComponentOne"
import ChildComponentTwo from "./ChildComponentTwo"
import { ChildComponentThree } from "./ChildComponentThree"

function RMBasicUsingMultipleComponent() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="row">
        <div className="col-12 mb-4">
          <p>React Memo simple mode in <b>multiple component</b>:</p>
          <span>We use React Memo for preventing child component from rerendering whenever the action is performed by on parent.</span>
          <span>Count Value Is: {count}</span>&nbsp;&nbsp;&nbsp;
          <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
        <div className="col-4">
          <ChildComponentOne />
        </div>
        <div className="col-4">
          <ChildComponentThree />
        </div>
        <div className="col-4">
          <ChildComponentTwo />
        </div>
      </div>
      <hr />
    </>
  )
}
export default RMBasicUsingMultipleComponent