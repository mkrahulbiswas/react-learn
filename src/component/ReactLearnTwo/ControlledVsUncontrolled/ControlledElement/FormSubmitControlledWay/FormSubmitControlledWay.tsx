import { useState } from "react";
import { Button, Form, ListGroup, Row } from "react-bootstrap";

export default function FormSubmitControlledWay() {
  return (
    <>
      <h3><b>By controlled way from submit</b></h3>
      {/* <TypeOne /> */}
      <TypeTwo />
    </>
  )
}

export function TypeOne() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const changeInputValue = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    switch (name) {
      case "Name":
        setName(value);
        break;
      case "Email":
        setEmail(value);
        break;
      case "Phone":
        setPhone(value);
        break;
    }
  };
  const submitForm = (e: any) => {
    e.preventDefault()
    let finalData = {
      name,
      email,
      phone,
    }
    console.log(finalData)
  }
  return (
    <Row>
      <div className="col-12 mt-1 bg-light">
        <Row>
          <div className="col-md-6 p-3">
            <Form onSubmit={() => submitForm(event)}>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" name="Name" value={name} onChange={(e) => changeInputValue(e)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupeEmail">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control type="text" placeholder="Email" name="Email" value={email} onChange={(e) => changeInputValue(e)} />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formGroupPhone">
                <Form.Label className="fw-bold">Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone" name="Phone" value={phone} onChange={(e) => changeInputValue(e)} />
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
                <span>{name}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span><b>Email:</b> </span>
                <span>{email}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span><b>Phone:</b> </span>
                <span>{phone}</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Row>
      </div>
      <hr />
    </Row>
  )
}

export function TypeTwo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const changeInputValue = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }))
  };
  const submitForm = (e: any) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <Row>
      <div className="col-12 mt-1 bg-light">
        <Row>
          <div className="col-md-6 p-3">
            <Form onSubmit={() => submitForm(event)}>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" name="name" value={formData.name} onChange={(e) => changeInputValue(e)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupeEmail">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control type="text" placeholder="Email" name="email" value={formData.email} onChange={(e) => changeInputValue(e)} />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formGroupPhone">
                <Form.Label className="fw-bold">Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone" name="phone" value={formData.phone} onChange={(e) => changeInputValue(e)} />
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
                <span>{formData.name}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span><b>Email:</b> </span>
                <span>{formData.email}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span><b>Phone:</b> </span>
                <span>{formData.phone}</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Row>
      </div>
    </Row>
  )
}