import axios from "axios"
import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { deleteStudentApi } from "../../../../../../services/api-service"

export default function UsingAxios({ getData }: any) {
  return (
    <>
      <p>Hear is the example of <b>delete api</b> by using <b>axios</b> <span style={{ color: 'red' }}>without using</span> <b>async await</b> type</p>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div className="p-3 bg-light">
            <WithoutAsyncAndService getData={getData} />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div className="p-3 bg-light">
            <WithoutAsyncButWithService getData={getData} />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div className="p-3 bg-light">
            <WithAsyncButWithoutService getData={getData} />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
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
  const deleteStudent = (event: any) => {
    event.preventDefault()
    axios.delete(`https://kisalayakgschool.com/api/deleteStudent/${targetId}`,
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
      <Form onSubmit={deleteStudent}>
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

export function WithoutAsyncButWithService({ getData }: any) {
  const [targetId, setTargetId] = useState(0)
  const deleteStudent = (event: any) => {
    event.preventDefault()
    deleteStudentApi(targetId).then((res) => {
      console.log(res)
      getData()
    }).catch((err) => console.log(err))
  }

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>with using</span> <b>services</b> but not <b>async</b></p>
      <Form onSubmit={deleteStudent}>
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

export function WithAsyncButWithoutService({ getData }: any) {
  const [targetId, setTargetId] = useState(0)
  const deleteStudent = async (event: any) => {
    event.preventDefault()
    const resp = await axios.delete(`https://kisalayakgschool.com/api/deleteStudent/${targetId}`,
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
      <Form onSubmit={deleteStudent}>
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

export function WithAsyncAndService({ getData }: any) {
  const [targetId, setTargetId] = useState(0)
  const deleteStudent = async (event: any) => {
    event.preventDefault()
    const resp = await deleteStudentApi(targetId)
    if (resp.data.status == 1) {
      getData()
    }
  }

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>with using</span> <b>services</b> and <b>async</b></p>
      <Form onSubmit={deleteStudent}>
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