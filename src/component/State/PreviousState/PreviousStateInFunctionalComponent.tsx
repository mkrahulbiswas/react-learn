import { useState } from "react"

function PreviousStateInFunctionalComponent() {
  const [previous, setPrevious] = useState(1)
  const [current, setCurrent] = useState(1)
  function FirstClick() {
    setCurrent((prev: any) => {
      setPrevious(prev)
      return Math.floor(Math.random() * 10)
    })
  }
  return (
    <div>
      <h1>Previous: {previous}</h1>
      <h1>Current: {current}</h1>
      <button onClick={() => FirstClick()}>Click Me</button>
    </div>
  )
}

export default PreviousStateInFunctionalComponent
