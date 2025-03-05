import { useState } from "react"

function HOCFunctionalInOne() {
  return (
    <div>
      <h1>HOC Example</h1>
      <span>There you can see one component called inside another component</span>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <CounterRed cmp={Counter} />
        <CounterGreen cmp={Counter} />
        <CounterBlur cmp={Counter} />
      </div>
    </div>
  )
}
function CounterRed(props: any) {
  return (
    <div style={{ borderRadius: '10px', backgroundColor: 'red', margin: '10px', padding: '10px' }}>
      <props.cmp />
    </div>
  )
}
function CounterGreen(props: any) {
  return (
    <div style={{ borderRadius: '10px', backgroundColor: 'green', margin: '10px', padding: '10px' }}>
      <props.cmp />
    </div>
  )
}
function CounterBlur(props: any) {
  return (
    <div style={{ borderRadius: '10px', backgroundColor: 'blue', margin: '10px', padding: '10px' }}>
      <props.cmp />
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3 className="mb-3 text-white">{count}</h3>
      <button className="btn btn-warning btn-sm" onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default HOCFunctionalInOne