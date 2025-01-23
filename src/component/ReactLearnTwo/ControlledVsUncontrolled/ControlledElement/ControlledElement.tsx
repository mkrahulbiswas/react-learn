import { useState } from "react"

export default function ControlledElement() {
  const [name, setName] = useState()
  return (
    <>
      <h3><b>By defining state variable value</b></h3>
      <span>If you set any input value dynamically then you can change or delete the input value because its become a controlled input</span>: <input type="text" value={name} />
      <hr />
    </>
  )
}