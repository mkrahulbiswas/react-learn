import { useState } from "react"

function HOCFunctionalDifferentNestedChild() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3 className="mb-3 text-white">{count}</h3>
      <button className="btn btn-warning btn-sm" onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default HOCFunctionalDifferentNestedChild