import { useState } from "react"
import FPCPropsChild from "./FPCPropsChild"

function FPCPropsParent() {
  const [current, setCurrent] = useState(0)
  return (
    <div>
      <FPCPropsChild dataPass={current} />
      <button onClick={() => setCurrent(Math.floor(Math.random() * 10))}>Click Me</button>
    </div>
  )
}

export default FPCPropsParent
