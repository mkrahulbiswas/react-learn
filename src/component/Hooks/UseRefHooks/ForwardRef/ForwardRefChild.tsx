import { forwardRef } from "react"

function ForwardRefChild(props: any, refPass: any) {
  return (
    <div>
      <input type="text" ref={refPass} />
    </div>
  )
}

export default forwardRef(ForwardRefChild)
