import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
export default function UseEffectMultipleTime() {
  return (
    <React.Fragment>
      <p>Use effect multiple times:</p>
      <ExampleOne />
    </React.Fragment>
  )
}


export function ExampleOne() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')
  const [afterCallUseEffect, setAfterCallUseEffect] = useState([]);
  useEffect(() => {
    document.title = 'Counter Click: ' + counter.toString();
  }, [counter]);
  useEffect(() => {
    if (name == '') {
      setAfterCallUseEffect([])
    } else {
      setAfterCallUseEffect((prev): any => {
        return [...prev, name]
      })
    }
  }, [name]);
  return (
    <>
      <p>Use effect example one:</p>
      <div className='useHooks'>
        <div>
          <p>Hear you can see an example of <b>use effect multiple</b> times</p>
          <span>{counter}</span>
          <Button variant='info' onClick={() => setCounter(counter + 1)}>Click Me</Button>
          <p className='mt-3'>
            <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
          </p>
          {
            afterCallUseEffect.map((value, key) =>
              <span key={key}>{value}</span>
            )
          }
        </div>
      </div>
      <hr />
    </>
  )
}