import { useEffect, useState } from "react"

function UseEffectHooksConditional() {
  // useState is hooks
  const [countOne, incCountOne] = useState(0)
  const [countTwo, incCountTwo] = useState(0)
  const [countThree, incCountThree] = useState(0)



  //--- useEffect us as conditional based like 'countOne' is now applicable for only 'useEffect'. The conditional based 'useEffect' also can applicable for 'props'
  useEffect(() => {
    console.log('SS')
  }, [countOne, countTwo])

  return (
    <div>
      <h1>Count One: {countOne}</h1>
      <h1>Count Two: {countTwo}</h1>
      <h1>Count Three: {countThree}</h1>
      <button onClick={() => incCountOne(countOne + 1)}>Click Me</button>
      <button onClick={() => incCountTwo(countTwo + 1)}>Click Me</button>
      <button onClick={() => incCountThree(countThree + 1)}>Click Me</button>
    </div>
  )
}

export default UseEffectHooksConditional
