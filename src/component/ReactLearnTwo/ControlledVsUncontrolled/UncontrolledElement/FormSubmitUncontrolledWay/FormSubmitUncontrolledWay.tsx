import { useState } from "react";
import { Button, Form, ListGroup, Row } from "react-bootstrap";

export default function FormSubmitUncontrolledWay() {
  const [submittedFormData, setSubmittedFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const submitForm = (e: any) => {
    e.preventDefault()
    setSubmittedFormData({
      name: e.target.Name.value,
      email: e.target.Email.value,
      phone: e.target.Phone.value,
    })
  }
  return (
    <>
      <h3><b>By uncontrolled way from submit</b></h3>
      <Row>
        <div className="col-12 mt-1 bg-light">
          <Row>
            <div className="col-md-6 p-3">
              <Form onSubmit={() => submitForm(event)}>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" name="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupeEmail">
                  <Form.Label className="fw-bold">Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" name="Email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formGroupPhone">
                  <Form.Label className="fw-bold">Phone</Form.Label>
                  <Form.Control type="text" placeholder="Phone" name="Phone" />
                </Form.Group>
                <Form.Group className=" d-flex justify-content-center">
                  <Button variant="primary" type="submit">Submit</Button>
                </Form.Group>
              </Form>
            </div>
            <div className="col-md-6 p-3 d-flex justify-content-center">
              <ListGroup className="align-self-center">
                <ListGroup.Item>
                  <span><b>Name:</b> </span>
                  <span>{submittedFormData.name}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span><b>Email:</b> </span>
                  <span>{submittedFormData.email}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span><b>Phone:</b> </span>
                  <span>{submittedFormData.phone}</span>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Row>
        </div>
      </Row>
    </>
  )
}