import { useState } from "react"
import RenderLifeCycleClass from "./RenderLifeCycleClassChild"

function RenderLifeCycleClassParent() {
  const [name, setName] = useState('Arpita Basu')
  return (
    <div>
      <RenderLifeCycleClass name={name} />
      <button onClick={() => setName('Rahul Biswas')}>Change Props Value</button>
    </div>
  )
}

export default RenderLifeCycleClassParent