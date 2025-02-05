import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
function UpdateData() {
  const [fromData, setFromData] = useState({ id: 5, name: '', email: '', phone: '', class: '' })
  const saveTestData = (event: any) => {
    event.preventDefault()
    fetch('https://kisalayakgschool.com/api/updateTestData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
      },
      body: JSON.stringify(fromData)
    }).then((result) => {
      result.json().then((response) => {
        console.log(response)
      })
    }).catch(error => console.log({ error }))
  }
  return (
    <div>
      <div className="bg-light p-3 rounded">
        <Form onSubmit={saveTestData}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName" className="mb-3 col-12 col-sm-12 col-md-4 col-xl-3 col-lg-3">
              <Form.Label className="fw-bold">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={(e) => setFromData({ ...fromData, name: e.target.value })} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3 col-12 col-sm-12 col-md-4 col-xl-3 col-lg-3">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email" onChange={(e) => setFromData({ ...fromData, email: e.target.value })} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone" className="mb-3 col-12 col-sm-12 col-md-4 col-xl-3 col-lg-3">
              <Form.Label className="fw-bold">Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone" onChange={(e) => setFromData({ ...fromData, phone: e.target.value })} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridClass" className="mb-3 col-12 col-sm-12 col-md-4 col-xl-3 col-lg-3">
              <Form.Label className="fw-bold">Class</Form.Label>
              <Form.Control type="text" placeholder="Enter class" onChange={(e) => setFromData({ ...fromData, class: e.target.value })} />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">Update</Button>
        </Form>
      </div>
    </div>
  )
}
export default UpdateData