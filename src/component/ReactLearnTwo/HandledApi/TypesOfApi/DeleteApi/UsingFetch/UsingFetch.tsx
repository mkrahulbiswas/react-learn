import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"

export default function UsingFetch({ getData }: any) {
  return (
    <>
      <p>Hear is the example of <b>post api</b> by using <b>fetch</b></p>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div className="bg-light p-3">
            <WithAsync getData={getData} />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div className="bg-light p-3">
            <WithoutAsync getData={getData} />
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export function WithAsync({ getData }: any) {
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
    })
    const data = await resp.json()
    if (data.status == 1) {
      getData()
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

export function WithoutAsync({ getData }: any) {
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
    }).then((result) => {
      result.json().then((response) => {
        console.log('Without Async-->', response)
        getData()
      })
    }).catch(error => console.log({ error }))
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