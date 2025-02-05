import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"

export default function UsingFetch({ getData }: any) {
  return (
    <>
      <p>Hear is the example of <b>put api</b> by using <b>fetch</b></p>
      <div className="row">
        <div className="col-6 mb-4">
          <div className="bg-light p-3">
            <WithAsync getData={getData} />
          </div>
        </div>
        <div className="col-6 mb-4">
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
  const [fromData, setFromData] = useState({ name: 'Rahul Biswas', email: 'biswas.rahul31@gmail.com', phone: '8436191135', class: '1' })
  const saveTestData = async (event: any) => {
    event.preventDefault()
    const resp = await fetch('https://kisalayakgschool.com/api/saveTestData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
      },
      body: JSON.stringify(fromData)
    })
    const data = await resp.json();
    if (data) getData()
    console.log('With Async-->', data)
  }
  return (
    <div>
      <p>Hear we use <b>fetch</b> <span style={{ color: 'red' }}>with using</span> <b>async</b></p>
      <Form onSubmit={saveTestData}>
        <Row className="col-12">
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={fromData.name} onChange={(e) => setFromData({ ...fromData, name: e.target.value })} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" value={fromData.email} onChange={(e) => setFromData({ ...fromData, email: e.target.value })} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhone" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone" value={fromData.phone} onChange={(e) => setFromData({ ...fromData, phone: e.target.value })} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Class</Form.Label>
            <Form.Control type="text" placeholder="Enter class" value={fromData.class} onChange={(e) => setFromData({ ...fromData, class: e.target.value })} />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </div>
  )
}

export function WithoutAsync({ getData }: any) {
  const [fromData, setFromData] = useState({ name: 'Rahul Biswas', email: 'biswas.rahul31@gmail.com', phone: '8436191135', class: '1' })
  const saveTestData = (event: any) => {
    event.preventDefault()
    fetch('https://kisalayakgschool.com/api/saveTestData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
      },
      body: JSON.stringify(fromData)
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
            <Form.Label className="fw-bold mb-0">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={fromData.name} onChange={(e) => setFromData({ ...fromData, name: e.target.value })} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" value={fromData.email} onChange={(e) => setFromData({ ...fromData, email: e.target.value })} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhone" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone" value={fromData.phone} onChange={(e) => setFromData({ ...fromData, phone: e.target.value })} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Class</Form.Label>
            <Form.Control type="text" placeholder="Enter class" value={fromData.class} onChange={(e) => setFromData({ ...fromData, class: e.target.value })} />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </div>
  )
}