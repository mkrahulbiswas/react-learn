import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
export default function UseEffectBasic() {
  return (
    <React.Fragment>
      <p>Use effect simple mode:</p>
      <ExampleOne></ExampleOne>
      <ExampleTwo></ExampleTwo>
    </React.Fragment>
  )
}


export function ExampleOne() {
  const [counter, setCounter] = useState(0)
  function incCounter() {
    setCounter(counter + 1)
  }
  useEffect(() => {
    console.log('Counter:- ', counter)
  }, [counter])
  return (
    <>
      <p>Use effect example one:</p>
      <div className='useHooks'>
        <div>
          <p>Hear we can see after using <b>Use Effect</b> whenever we change the state value the use state is also called because we put the state variable inside the array.</p>
          <span>{counter}</span>
          <Button variant='info' onClick={incCounter}>Click Me</Button>
        </div>
      </div>
      <hr />
    </>
  )
}

export function ExampleTwo() {
  const [counter, setCounter] = useState(0)
  const [conduct, setConduct] = useState(0)
  function incCounter() {
    setCounter(counter + 1)
  }
  useEffect(() => {
    console.log('Counter:- ', counter)
  }, [conduct])
  return (
    <>
      <p>Use effect example two:</p>
      <div className='useHooks'>
        <div>
          <p>Hear we can see after change the state value use effect is not calling because we did not mention the state variable inside the array.</p>
          <span>{counter}</span>
          <Button variant='info' onClick={incCounter}>Click Me</Button>
        </div>
      </div>
      <hr />
    </>
  )
}