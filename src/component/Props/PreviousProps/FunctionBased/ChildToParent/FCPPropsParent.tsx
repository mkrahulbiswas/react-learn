import { useRef, useState } from "react"
import FCPPropsChild from "./FCPPropsChild"
function FCPPropsParent() {
  const [current, setCurrent] = useState(0)
  const previous: any = useRef()
  function commonCallForChild(count: number = 0) {
    setCurrent((pre) => {
      previous.current = pre
      return count
    })
  }
  return (
    <div>
      <FCPPropsChild clickForAction={commonCallForChild} /><br />
      <span>Current: {current}</span><br />
      <span>Previous: {previous.current}</span>
    </div>
  )
}
export default FCPPropsParent