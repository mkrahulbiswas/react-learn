import React, { useState } from 'react'
import './MakingStepCounter.css'
import { Button, Col, Row } from 'react-bootstrap'
function MakingStepCounter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const incCount = () => {
    setCount(count + step)
  }
  const decCount = () => {
    setCount(count - step)
  }
  const resetCount = () => {
    setCount(0)
  }
  return (
    <React.Fragment>
      <Row>
        <div className='d-flex flex-column'>
          <div className='col-6 mb-4 text-center'>
            <span className='bg-info p-2'>{count}</span>
          </div>
          <div className='col-6'>
            <input className='form-control' type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
          </div>
        </div>
        <Row className='mt-3'>
          <Col className='col-6 d-flex justify-content-between'>
            <Button variant="primary" disabled={count >= 100} onClick={() => incCount()}>Increase Count</Button>
            <Button variant="info" disabled={count <= 0} onClick={() => decCount()}>Decrease Count</Button>
            <Button variant="danger" onClick={() => resetCount()}>Reset Count</Button>
          </Col>
        </Row>
      </Row>
      <hr />
    </React.Fragment>
  )
}
export default MakingStepCounter
