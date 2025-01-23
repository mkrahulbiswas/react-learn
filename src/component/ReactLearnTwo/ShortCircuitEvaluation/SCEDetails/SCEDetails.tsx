import { useState } from "react"

export default function SCEDetails() {
  return (
    <>
      <p>Short Circuit Evaluation:</p>
      <hr />
      <SCETypeOne />
      <hr />
      <SCETypeTwo />
      <hr />
      <SCETypeThree />
      <hr />
      <SCETypeFour />
    </>
  )
}

export function SCETypeOne() {
  const [data, setData] = useState(false)
  return (
    <>
      <p>Type one with '&&'</p>
      <br />
      {data && <span>True</span>}
      <button onClick={() => setData(!data)}>Click</button>
    </>
  )
}

export function SCETypeTwo() {
  const [data, setData] = useState(false)
  return (
    <>
      <p>Type one with '||'</p>
      <br />
      {data || <span>True</span>}
      <button onClick={() => setData(!data)}>Click</button>
    </>
  )
}

export function SCETypeThree() {
  const [data, setData] = useState(false)
  return (
    <>
      <p>Type one with '?'</p>
      <br />
      {data ? <span>True</span> : <span>False</span>}
      <button onClick={() => setData(!data)}>Click</button>
    </>
  )
}

export function SCETypeFour() {
  const [data, setData] = useState(false)
  return (
    <>
      <p>Type one with '??'</p>
      <br />
      {data ?? <span>True</span>}
      <button onClick={() => setData(!data)}>Click</button>
    </>
  )
}