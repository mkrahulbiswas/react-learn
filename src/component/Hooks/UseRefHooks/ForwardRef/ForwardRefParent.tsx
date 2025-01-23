import { useRef } from "react"
import ForwardRefChild from "./ForwardRefChild"

function ForwardRefParent() {
  let inputRef: any = useRef(null)
  function doAction() {
    inputRef.current.value = 'Arpita Basu'
    inputRef.current.style.color = 'blue'
    inputRef.current.style.backgroundColor = 'violet'
  }
  return (
    <div>
      <ForwardRefChild ref={inputRef} />
      <button onClick={() => doAction()}>Change Input</button>
    </div>
  )
}

export default ForwardRefParent