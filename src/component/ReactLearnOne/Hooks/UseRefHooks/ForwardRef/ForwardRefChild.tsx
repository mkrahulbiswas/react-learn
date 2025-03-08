import { forwardRef } from "react"

function ForwardRefChild(refPass: any) {
  return (
    <div>
      <input type="text" ref={refPass} />
    </div>
  )
}

export default forwardRef(ForwardRefChild)
