import { useMemo, useState } from "react"

function UseMemoHooksChild(props: any) {
  const [counterOne, setCounterOne] = useState(0)
  const multiplyCount = useMemo((): any => {
    console.warn('Calling Unnecessary: ', counterOne + ', ' + props.counterThreeData)
    return counterOne * 2
  }, [counterOne])
  return (
    <div>
      {/* <UseMemoHooksChild clickForAction={commonCallForChild} /> */}
      <h1><span>State Data: </span>{counterOne}</h1>
      <h1><span>Props Data: </span>{props.counterThreeData}</h1>
      <h1><span>Function for multiply: </span>{multiplyCount}</h1>
      <button onClick={() => setCounterOne(counterOne + 1)}>Counter 1</button>
    </div>
  )
}

export default UseMemoHooksChild
