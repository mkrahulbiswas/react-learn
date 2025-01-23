import { useState } from "react"
import UseMemoHooksChild from "./UseMemoHooksChild"

function UseMemoHooksParent() {
  const [counterThree, updateCountThree] = useState(0)
  return (
    <div>
      <UseMemoHooksChild counterThreeData={counterThree} />
      <button onClick={() => updateCountThree(counterThree + 1)}>Counter 3</button>
    </div>
  )
}

export default UseMemoHooksParent