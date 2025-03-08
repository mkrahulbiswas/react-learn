import { useState } from "react"
import ShouldComponentUpdateChildClass from "./ShouldComponentUpdateChildClass"

function ShouldComponentUpdateParentClass() {
  const [counterOne, incrementCounterOne] = useState(0)
  return (
    <div>
      <ShouldComponentUpdateChildClass counterOne={counterOne} />
      <button onClick={() => incrementCounterOne(counterOne + 1)}>Increment Counter One</button>
    </div>
  )
}

export default ShouldComponentUpdateParentClass