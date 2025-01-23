import { useRef } from "react"

function UseRefHooks() {
  let inputRef: any = useRef(null)
  function doAction() {
    inputRef.current.value = 'Rahul Biswas'
    inputRef.current.style.color = 'blue'
    inputRef.current.style.backgroundColor = 'pink'
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => doAction()}>Change Input</button>
    </div>
  )
}

export default UseRefHooks