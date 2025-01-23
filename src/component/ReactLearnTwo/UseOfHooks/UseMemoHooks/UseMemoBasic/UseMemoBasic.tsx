
import { useMemo, useState } from "react";

export default function UseMemoBasic() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <p>Use Memo simple mode:</p>
          <p>We use use memo for <b>optimize the value</b>. Its is a <b>callback function</b>.</p>
        </div>
        <div className="col-md-4">
          <span>Count: {count}</span>&nbsp;&nbsp;&nbsp;
          <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
        <div className="col-md-4">
          <ChildComponent />
        </div>
      </div>
      <hr />
    </>
  );
}


const ChildComponent = () => {
  const sum = () => {
    console.log('Calling')
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1
    }
    return i
  }
  const total = useMemo(() => sum(), [])
  return (
    <>
      <p>There we make a large calculation for the effect after multiple quick click on <b>parent component button</b> and use <b>Use Memo</b></p>
      <span>{total}</span>
    </>
  )
}