import moment from 'moment'
import React, { useEffect, useState } from 'react'
export default function UseEffectCleanup() {
  return (
    <React.Fragment>
      <p>Use effect simple mode:</p>
      <WithoutUseClearIntervale />
      <SetIntervalInsideUseEffect />
      <SetIntervalOutsideUseEffect />
    </React.Fragment>
  )
}

export function WithoutUseClearIntervale() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  }, [])
  return (
    <>
      <p>Hear we use <b>Set Interval</b> inside <b>Use Effect</b> but did not use clear intervale:</p>
      <div className='useHooks'>
        <div>{count}</div>
      </div>
      <p>There you see the increment is don by 2 time increment but we sent by one time. This happen because we did not clear the previous interval value.</p>
      <hr />
    </>
  )
}

export function SetIntervalInsideUseEffect() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <p>Hear we use <b>Set Interval</b> inside <b>Use Effect</b>:</p>
      <div className='useHooks'>
        <div>{count}</div>
      </div>
      <p>There the count increment by 1 time in every second is working fine, because we put <b>set intervale</b> inside the <b>use effect</b></p>
      <hr />
    </>
  )
}

export function SetIntervalOutsideUseEffect() {
  const [count, setCount] = useState(0)

  const interval = setInterval(() => {
    setCount((prev) => prev + 1)
  }, 1000)

  useEffect(() => {
    return () => clearInterval(interval)
  }, [interval])
  return (
    <>
      <p>Hear we use <b>Set Interval</b> outside <b>Use Effect</b>:</p>
      <div className='useHooks'>
        <div>{count}</div>
      </div>
      <p>You can see there we increase the value every after 1 second by 1 time but its increase with random times. Because we put the <b>set intervale</b> outside the <b>use effect</b> thats why the cleanup of interval previous value is not working.</p>
      <hr />
    </>
  )
}