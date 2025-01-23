import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
export default function LiftingState() {
  const [inputVal, setInputVal] = useState()
  return (
    <React.Fragment>
      <p>There we take data from one child and pass it to another child component inside same parent component</p>
      <ChildComponentOne inputVal={inputVal} setInputVal={setInputVal} />
      <ChildComponentTwo inputVal={inputVal} />
    </React.Fragment>
  )
}

const ChildComponentOne = ({ inputVal, setInputVal }: any) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Any Text:</Form.Label>
          <Form.Control type="text" placeholder="Enter as you want" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        </Form.Group>
      </Form>
    </>
  )
}

const ChildComponentTwo = ({ inputVal }: any) => {
  return (
    <>
      <span>{inputVal}</span>
    </>
  )
}