
import { memo, useMemo, useRef, useState } from "react";

export default function UseMemoAdvance() {
  const [count, setCount] = useState(0)
  let student: any = {
    name: 'Arpita Biswas',
    age: 26
  }
  const employee = useMemo(() => {
    return {
      name: 'Rahul Biswas',
      age: 32
    }
  }, [])
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <p>Use Memo advance mode:</p>
        </div>
        <div className="col-md-12 mb-3">
          <div className="bg-light p-3">
            <span>Count: <b>{count}</b></span>&nbsp;&nbsp;&nbsp;
            <button className="btn btn-sm btn-info" onClick={() => setCount(count + 1)}>Increase</button>
          </div>
          <br />
          <p>There after click on <b>Increase Button</b> you see the bellow effect in each children component.</p>
          <p><b>1)</b> In <b>child component one</b> component is alloys <b>re-rendered</b> where the <b>momo</b> is used inside the component because there the value which is passing from the parent is not inder <b>use momo</b>.</p>
          <p><b>2)</b> In <b>child component two</b> component is not <b>re-rendered</b> because there the value which is passing from the parent is inder <b>use momo</b>.</p>
          <p><b>3)</b> In <b>child component three</b> component is not <b>re-rendered</b> because there the value which is <b>statically passed</b>.</p>
        </div>
        <div className="col-md-4">
          <ChildComponentOne data={student} />
        </div>
        <div className="col-md-4">
          <ChildComponentTwo data={employee} />
        </div>
        <div className="col-md-4">
          <ChildComponentThree data="Biswanath Dash" />
        </div>
      </div>
      <hr />
    </>
  );
}


const ChildComponentOne = memo(({ data }: any) => {
  const ref = useRef(0)
  return (
    <>
      <p><b>Child Component One</b></p>
      <span className="d-block">Page calling: <b>{ref.current++}</b> times</span>
      <span className="d-block"><b>Name:</b> {data.name}</span>
      <span className="d-block"><b>Age:</b> {data.age}</span>
    </>
  )
})

const ChildComponentTwo = memo(({ data }: any) => {
  const ref = useRef(0)
  return (
    <>
      <p><b>Child Component Two</b></p>
      <span className="d-block">Page calling: <b>{ref.current++}</b> times</span>
      <span className="d-block"><b>Name:</b> {data.name}</span>
      <span className="d-block"><b>Age:</b> {data.age}</span>
    </>
  )
})

const ChildComponentThree = memo(({ data }: any) => {
  const ref = useRef(0)
  return (
    <>
      <p><b>Child Component Three</b></p>
      <span className="d-block">Page calling: <b>{ref.current++}</b> times</span>
      <span className="d-block"><b>Name:</b> {data}</span>
    </>
  )
})