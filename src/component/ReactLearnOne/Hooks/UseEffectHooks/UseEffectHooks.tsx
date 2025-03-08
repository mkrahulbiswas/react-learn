import { useEffect, useState } from "react"

function UseEffectHooks() {
  // useState is hooks
  const [count, setData] = useState(0)
  function FirstClick() {
    setData(count+1)
  }

  //--- useEffect is same as 'Component Did Mount'
  useEffect(()=>{
    console.log('SS')
  })
  useEffect(()=>{
    console.log('DD')
  })
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => FirstClick()}>Click Me</button>
    </div>
  )
}

export default UseEffectHooks
