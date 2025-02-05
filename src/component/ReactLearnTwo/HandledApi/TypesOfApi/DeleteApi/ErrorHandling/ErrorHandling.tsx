import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"

export default function ErrorHandling({ getData }: any) {
  return (
    <>
      <p>Hear is the example of <b>error handling</b></p>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div className="bg-light p-3">
            <FetchWithAsync getData={getData} />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div className="bg-light p-3">
            <FetchWithoutAsync getData={getData} />
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export function FetchWithAsync({ getData }: any) {
  const [targetId, setTargetId] = useState(0)
  const saveTestData = async (event: any) => {
    event.preventDefault()
    const resp = await fetch(`https://kisalayakgschool.com/api/deleteTestData/${targetId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
      },
      body: JSON.stringify(targetId)
    })
    const data = await resp.json()
    if (data.status == 1) {
      getData()
    } else {
      console.warn(data.msg)
    }
  }
  return (
    <div>
      <p>Hear we use <b>fetch</b> <span style={{ color: 'red' }}>with using</span> <b>async</b></p>
      <Form onSubmit={saveTestData}>
        <Row className="col-12">
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Student Id</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={targetId} onChange={(e: any) => setTargetId(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3 mt-4">
            <Button variant="danger" type="submit">Delete</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}

export function FetchWithoutAsync({ getData }: any) {
  const [targetId, setTargetId] = useState(0)
  const saveTestData = (event: any) => {
    event.preventDefault()
    fetch(`https://kisalayakgschool.com/api/deleteTestData/${targetId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
      },
      body: JSON.stringify(targetId)
    }).then((resp) => {
      resp.json().then((data) => {
        if (data.status == 0) {
          console.warn(data.msg)
        } else {
          getData()
        }
      })
    }).catch(err => {
      throw new Error("May the the request url is invalid" + err);
    })
  }
  return (
    <div>
      <p>Hear we use <b>fetch</b> <span style={{ color: 'red' }}>without using</span> <b>async</b></p>
      <Form onSubmit={saveTestData}>
        <Row className="col-12">
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Student Id</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={targetId} onChange={(e: any) => setTargetId(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3 mt-4">
            <Button variant="danger" type="submit">Delete</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}