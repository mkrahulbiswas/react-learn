
import { memo, useCallback, useMemo, useRef, useState } from "react";

export default function RMAdvance() {
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

  const handelIncrease = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const handelDecrease = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <p><b>React Momo</b> & <b>Use Memo</b> advance mode:</p>
        </div>
        <div className="col-md-12">
          <div className="bg-light p-3">
            <p>There after click on <b>Increase Button</b> you see the bellow effect in each children component.</p>
            <span>Count: <b>{count}</b></span>&nbsp;&nbsp;&nbsp;
            <button className="btn btn-sm btn-info" onClick={() => setCount(count + 1)}>Increase</button>
          </div>
          <br />
        </div>
        <div className="col-md-6 mt-4">
          <ChildComponentOne data={student} />
        </div>
        <div className="col-md-6 mt-4">
          <ChildComponentTwo data={employee} />
        </div>
        <div className="col-md-6 mt-4">
          <ChildComponentThree data="Biswanath Dash" />
        </div>
        <div className="col-md-6 mt-4">
          <ChildComponentFour data={employee} />
        </div>
        <div className="col-md-6 mt-4">
          <ChildComponentFive action={handelIncrease}>Increase</ChildComponentFive>
        </div>
        <div className="col-md-6 mt-4">
          <ChildComponentSix action={handelDecrease}>Decrease</ChildComponentSix>
        </div>
        <div className="col-md-6 mt-4">
          <ChildComponentSeven action={handelIncrease}>Increase</ChildComponentSeven>
        </div>
      </div>
      <hr />
    </>
  );
}


const ChildComponentOne = memo(({ data }: any) => {
  const ref = useRef(0)
  return (
    <div className="bg-light p-3">
      <p><b>Child Component One</b> (Calling: <b>{ref.current++}</b> times)</p>
      <p className="bg-warning p-2"><b>NOTE:</b> Hear this component is alloys <b>re-rendered</b> where the <b>momo</b> is used inside the component because there the value which is passing from the parent is not inside <b>use momo</b>.</p>
      <span className="d-block"><b>Name:</b> {data.name}</span>
      <span className="d-block"><b>Age:</b> {data.age}</span>
    </div>
  )
})

const ChildComponentTwo = memo(({ data }: any) => {
  const ref = useRef(0)
  return (
    <div className="bg-light p-3">
      <p><b>Child Component Two</b> (Calling: <b>{ref.current++}</b> times)</p>
      <p className="bg-warning p-2"><b>NOTE:</b> Hear this component is not <b>re-rendered</b> because there the value which is passing from the parent is inside <b>use momo</b>.</p>
      <span className="d-block"><b>Name:</b> {data.name}</span>
      <span className="d-block"><b>Age:</b> {data.age}</span>
    </div>
  )
})

const ChildComponentThree = memo(({ data }: any) => {
  const ref = useRef(0)
  return (
    <div className="bg-light p-3">
      <p><b>Child Component Three</b> (Calling: <b>{ref.current++}</b> times)</p>
      <p className="bg-warning p-2"><b>NOTE:</b> Hear this component is not <b>re-rendered</b> because there the value which is <b>statically passed</b>.</p>
      <span className="d-block"><b>Name:</b> {data}</span>
    </div>
  )
})

const ChildComponentFour = ({ data }: any) => {
  const ref = useRef(0)
  return (
    <div className="bg-light p-3">
      <p><b>Child Component Four</b> (Calling: <b>{ref.current++}</b> times)</p>
      <p className="bg-warning p-2"><b>NOTE:</b> Hear this component is <b>re-rendered</b> after using the <b>use momo</b>  in parent component because  there in this component we did not wrap whole component inside <b>momo</b>.</p>
      <span className="d-block"><b>Name:</b> {data.name}</span>
      <span className="d-block"><b>Age:</b> {data.age}</span>
    </div>
  )
}

const ChildComponentFive = memo(({ action, children }: any) => {
  const ref = useRef(0)
  return (
    <div className="bg-light p-3">
      <p><b>Child Component Five</b> (Calling: <b>{ref.current++}</b> times)</p>
      <p className="bg-warning p-2"><b>NOTE:</b> Hear we use <b>Use Callback</b> to <b>wrap and optimize</b> the function in <b>parent component</b> before pass the <b>method</b> as props in <b>children component</b>. Thats why this component is not <b>re-rendered</b> after click on <b>increase button</b>.</p>
      <button className={'btn btn-success'} onClick={action}>{children}</button>
    </div>
  )
})

const ChildComponentSix = memo(({ action, children }: any) => {
  const ref = useRef(0)
  return (
    <div className="bg-light p-3">
      <p><b>Child Component Six</b> (Calling: <b>{ref.current++}</b> times)</p>
      <p className="bg-warning p-2"><b>NOTE:</b> Hear we did not use <b>Use Callback</b> to <b>wrap or optimize</b> the function in <b>parent component</b> before pass the <b>method</b> as props in <b>children component</b>. Thats why this component is <b>re-rendered</b> after click on <b>decrease button</b>.</p>
      <button className={'btn btn-danger'} onClick={action}>{children}</button>
    </div>
  )
})

const ChildComponentSeven = ({ action, children }: any) => {
  const ref = useRef(0)
  return (
    <div className="bg-light p-3">
      <p><b>Child Component Seven</b> (Calling: <b>{ref.current++}</b> times)</p>
      <p className="bg-warning p-2"><b>NOTE:</b> Hear we use <b>Use Callback</b> to <b>wrap or optimize</b> the function in <b>parent component</b> before pass the <b>method</b> as props in <b>children component</b> but still the component is <b>re-rendered</b> because hear the <b>whole component</b> is not rapped inside <b>memo</b></p>
      <button className={'btn btn-success'} onClick={action}>{children}</button>
    </div>
  )
}