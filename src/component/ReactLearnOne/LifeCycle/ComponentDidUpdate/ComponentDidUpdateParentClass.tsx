import { useState } from "react"
import ComponentDidUpdateChildClass from "./ComponentDidUpdateChildClass"

function ComponentDidUpdateParentClass() {
  const [counterOne, incrementCounterOne] = useState(0)
  return (
    <div>
      <ComponentDidUpdateChildClass counterOne={counterOne} />
      <button onClick={() => incrementCounterOne(counterOne + 1)}>Increment Counter One</button>
    </div>
  )
}

export default ComponentDidUpdateParentClass