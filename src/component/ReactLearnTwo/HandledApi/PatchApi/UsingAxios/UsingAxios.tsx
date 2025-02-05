import axios from "axios"
import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { deleteStudent } from "../../../../../services/ReactLearnTwoService"

export default function UsingAxios({ getData }: any) {
  return (
    <>
      <p>Hear is the example of <b>patch api</b> by using <b>axios</b> <span style={{ color: 'red' }}>without using</span> <b>async await</b> type</p>
      <div className="row">
        <div className="col-6 mb-4">
          <div className="p-3 bg-light">
            <WithoutAsyncAndService getData={getData} />
          </div>
        </div>
        <div className="col-6 mb-4">
          <div className="p-3 bg-light">
            <WithoutAsyncButWithService getData={getData} />
          </div>
        </div>
        <div className="col-6 mb-4">
          <div className="p-3 bg-light">
            <WithAsyncButWithoutService getData={getData} />
          </div>
        </div>
        <div className="col-6 mb-4">
          <div className="p-3 bg-light">
            <WithAsyncAndService getData={getData} />
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export function WithoutAsyncAndService({ getData }: any) {
  const [targetId, setTargetId] = useState(0)
  const saveTestData = (event: any) => {
    event.preventDefault()
    axios.delete(`https://kisalayakgschool.com/api/deleteTestData/${targetId}`,
      {
        headers: {
          'X-Mashape-Key': 'required',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'appVersion': '1',
          'mode': 'test'
        }
      }).then((res) => {
        console.log(res)
        getData()
      }).catch((err) => console.log(err))
  }

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>without using</span> <b>services</b> and <b>async</b></p>
      <Form onSubmit={saveTestData}>
        <Row className="col-12">
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Put id to delete</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={targetId} onChange={(e: any) => setTargetId(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3 mt-4">
            <Button variant="success" type="submit">Status</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}

export function WithoutAsyncButWithService({ getData }: any) {
  const [targetId, setTargetId] = useState(0)
  const saveTestData = (event: any) => {
    event.preventDefault()
    deleteStudent(targetId).then((res) => {
      console.log(res)
      getData()
    }).catch((err) => console.log(err))
  }

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>with using</span> <b>services</b> but not <b>async</b></p>
      <Form onSubmit={saveTestData}>
        <Row className="col-12">
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Put id to delete</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={targetId} onChange={(e: any) => setTargetId(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3 mt-4">
            <Button variant="success" type="submit">Status</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}

export function WithAsyncButWithoutService({ getData }: any) {
  const [targetId, setTargetId] = useState(0)
  const saveTestData = async (event: any) => {
    event.preventDefault()
    const resp = await axios.delete(`https://kisalayakgschool.com/api/deleteTestData/${targetId}`,
      {
        headers: {
          'X-Mashape-Key': 'required',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'appVersion': '1',
          'mode': 'test'
        }
      })
    if (resp.data.status == 1) {
      getData()
    }
  }

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>without using</span> <b>services</b> but with <b>async</b></p>
      <Form onSubmit={saveTestData}>
        <Row className="col-12">
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Put id to delete</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={targetId} onChange={(e: any) => setTargetId(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3 mt-4">
            <Button variant="success" type="submit">Status</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}

export function WithAsyncAndService({ getData }: any) {
  const [targetId, setTargetId] = useState(0)
  const saveTestData = async (event: any) => {
    event.preventDefault()
    const resp = await deleteStudent(targetId)
    if (resp.data.status == 1) {
      getData()
    }
  }

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>with using</span> <b>services</b> and <b>async</b></p>
      <Form onSubmit={saveTestData}>
        <Row className="col-12">
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Put id to delete</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={targetId} onChange={(e: any) => setTargetId(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName" className="col-6 mb-3 mt-4">
            <Button variant="success" type="submit">Status</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}