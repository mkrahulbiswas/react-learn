
import { memo, useCallback, useRef, useState } from "react";

export default function UseCallbackBasic() {
  const [count, setCount] = useState(0)

  const handelIncrease = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const handelDecrease = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12 mb-4">
          <p>Use callback simple mode:</p>
          <p>We use use callback for <b>optimize the function</b>.</p>
          <span>Count: {count}</span>
        </div>
        <div className="col-md-4">
          <ChildComponentOne action={handelIncrease}>Increase</ChildComponentOne>
        </div >
        <div className="col-md-4">
          <ChildComponentTwo action={handelDecrease}>Decrease</ChildComponentTwo>
        </div >
      </div >
      <hr />
    </>
  );
}


const ChildComponentOne = memo(({ action, children }: any) => {
  const ref = useRef(0)
  return (
    <>
      <p><b>Page Calling:</b> {ref.current++}</p>
      <p>Hear we use <b>Use Callback</b> to <b>wrap and optimize</b> the function in <b>parent component</b> before pass the <b>method</b> as props in <b>children component</b>. Thats why this component is not <b>re-rendered</b> after click on <b>increase button</b>.</p>
      <button className={'btn btn-success'} onClick={action}>{children}</button>
    </>
  )
})

const ChildComponentTwo = memo(({ action, children }: any) => {
  const ref = useRef(0)
  return (
    <>
      <p><b>Page Calling:</b> {ref.current++}</p>
      <p>Hear we did not use <b>Use Callback</b> to <b>wrap or optimize</b> the function in <b>parent component</b> before pass the <b>method</b> as props in <b>children component</b>. Thats why this component is <b>re-rendered</b> after click on <b>decrease button</b>.</p>
      <button className={'btn btn-danger'} onClick={action}>{children}</button>
    </>
  )
})