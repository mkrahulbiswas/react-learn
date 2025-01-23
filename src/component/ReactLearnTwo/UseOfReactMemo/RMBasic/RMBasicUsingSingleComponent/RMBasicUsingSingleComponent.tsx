import { memo, useRef, useState } from "react"

export default function RMBasicUsingSingleComponent() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="row">
        <div className="col-12 mb-4">
          <p>React Memo simple mode in <b>single component</b>:</p>
          <span>We use React Memo for preventing child component from rerendering whenever the action is performed by on parent.</span>
          <span>Count Value Is: {count}</span>&nbsp;&nbsp;&nbsp;
          <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
        <div className="col-6">
          <ChildComponentOne />
        </div>
        <div className="col-6">
          <ChildComponentTwo />
        </div>
      </div>
      <hr />
    </>
  )
}

const ChildComponentOne = memo(() => {
  const ref = useRef(0)
  return (
    <>
      <p>This is example of USE MEMO type one</p>
      <p>Here we have used <b>use momo</b>, so whenever there is a change in the <b>parent component</b>, the <b>child component</b> where it is used is not <b>re-rendered</b>.</p>
      <span>Ref Value Is: {ref.current++}</span>
    </>
  )
})

const ChildComponentTwo = () => {
  const ref = useRef(0)
  return (
    <>
      <p>This is example of USE MEMO type one</p>
      <p>Here we have used <b>use momo</b>, so whenever there is a change in the <b>parent component</b>, the <b>child component</b> where it is used is not <b>re-rendered</b>.</p>
      <span>Ref Value Is: {ref.current++}</span>
    </>
  )
}