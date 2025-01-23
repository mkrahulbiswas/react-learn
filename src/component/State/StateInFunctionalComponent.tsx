import { useState } from "react"

function StateInFunctionalComponent() {
  const [data, setData] = useState('Rahul Biswas')
  function FirstClick() {
    setData('Arpita Basu')
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => FirstClick()}>Click Me</button>
    </div>
  )
}

export default StateInFunctionalComponent
