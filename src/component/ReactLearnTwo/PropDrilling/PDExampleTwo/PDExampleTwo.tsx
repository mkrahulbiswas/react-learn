import { useState } from "react"

export default function PDExampleTwo() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="row bg-light p-3">
        <div className="col-3 p-2 d-flex justify-content-center" style={{ backgroundColor: '#ffdfe4' }}>
          <button onClick={() => setCount(count + 1)} className="btn btn-success align-self-center">Increase Count</button>
        </div>
        <div className="col-6 p-2 ms-3" style={{ backgroundColor: '#ffdfe4' }}>
          <span>Main Component: <b>{count}</b></span>
          <ParentComponent count={count} />
        </div>
      </div>
    </>
  )
}


const ParentComponent = (props: any) => {
  return (
    <>
      <br />
      <span>Parent Component: <b>{props.count + 1}</b></span>
      <ChildComponent count={props.count + 1} />
    </>
  )
}

const ChildComponent = (props: any) => {
  return (
    <>
      <br />
      <span>Child Component: <b>{props.count + 1}</b></span>
      <GrandChildComponent count={props.count + 1} />
    </>
  )
}

const GrandChildComponent = (props: any) => {
  return (
    <>
      <br />
      <span>Grand Child Component: <b>{props.count + 1}</b></span>
      <GrandGrandChildComponent count={props.count + 1} />
    </>
  )
}

const GrandGrandChildComponent = (props: any) => {
  return (
    <>
      <br />
      <span>Grand Grand Child Component: <b>{props.count}</b></span>
    </>
  )
}