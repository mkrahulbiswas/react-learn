import axios from "axios"
import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { updateStudentApi } from "../../../../../../services/api-service"

export default function UsingAxios({ getData }: any) {
  return (
    <>
      <p>Hear is the example <b>put api</b> by using <b>axios</b> <span style={{ color: 'red' }}>without using</span> <b>async await</b> type</p>
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
  const [fromData, setFromData] = useState({ name: 'Rahul Biswas', email: 'biswas.rahul31@gmail.com', phone: '8436191135', class: '1' })
  const [targetId, setTargetId] = useState(0)
  const updateStudent = (event: any) => {
    event.preventDefault()
    axios.put("https://kisalayakgschool.com/api/updateStudent/" + targetId,
      fromData,
      {
        headers: {
          'X-Mashape-Key': 'required',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'appVersion': '1',
          'mode': 'test'
        }
      }).then((res) => {
        console.log(res);
        getData()
      }).catch((err) => console.log(err))
  }

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>without using</span> <b>services</b> and <b>async</b></p>
      <Form onSubmit={updateStudent}>
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
          <Form.Group as={Col} controlId="formGridClass" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Student Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Id" value={targetId} onChange={(e: any) => setTargetId(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="col-6 mb-3">
            <Button variant="info" className="mt-4" type="submit">Update</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}

export function WithoutAsyncButWithService({ getData }: any) {
  const [fromData, setFromData] = useState({ name: 'Rahul Biswas', email: 'biswas.rahul31@gmail.com', phone: '8436191135', class: '1' })
  const [targetId, setTargetId] = useState(0)
  const updateStudent = (event: any) => {
    event.preventDefault()
    updateStudentApi(fromData, targetId).then((resp) => {
      if (resp.data.status == 1) {
        getData()
      }
    }).catch((err) => console.log(err))
  }

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>with using</span> <b>services</b> but not <b>async</b></p>
      <Form onSubmit={updateStudent}>
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
          <Form.Group as={Col} controlId="formGridClass" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Student Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Id" value={targetId} onChange={(e: any) => setTargetId(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="col-6 mb-3">
            <Button variant="info" className="mt-4" type="submit">Update</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}

export function WithAsyncButWithoutService({ getData }: any) {
  const [fromData, setFromData] = useState({ name: 'Rahul Biswas', email: 'biswas.rahul31@gmail.com', phone: '8436191135', class: '1' })
  const [targetId, setTargetId] = useState(0)
  const updateStudent = async (event: any) => {
    event.preventDefault()
    const resp = await axios.put("https://kisalayakgschool.com/api/updateStudent/" + targetId,
      fromData,
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
      <Form onSubmit={updateStudent}>
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
          <Form.Group as={Col} controlId="formGridClass" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Student Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Id" value={targetId} onChange={(e: any) => setTargetId(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="col-6 mb-3">
            <Button variant="info" className="mt-4" type="submit">Update</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}

export function WithAsyncAndService({ getData }: any) {
  const [fromData, setFromData] = useState({ name: 'Rahul Biswas', email: 'biswas.rahul31@gmail.com', phone: '8436191135', class: '1' })
  const [targetId, setTargetId] = useState(0)
  const updateStudent = async (event: any) => {
    event.preventDefault()
    const resp = await updateStudentApi(fromData, targetId)
    if (resp.data.status == 1) {
      getData()
    }
  }

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>with using</span> <b>services</b> and <b>async</b></p>
      <Form onSubmit={updateStudent}>
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
          <Form.Group as={Col} controlId="formGridClass" className="col-6 mb-3">
            <Form.Label className="fw-bold mb-0">Student Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Id" value={targetId} onChange={(e: any) => setTargetId(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridClass" className="col-6 mb-3">
            <Button variant="info" className="mt-4" type="submit">Update</Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}