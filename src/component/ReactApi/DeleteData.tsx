import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
function DeleteData() {
  const [deleteId, setDeleteId] = useState([])
  const deleteTestData = (event: any) => {
    event.preventDefault()
    fetch(`https://kisalayakgschool.com/api/deleteTestData/${deleteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
      },
    }).then((result) => {
      result.json().then((response) => {
        console.log(response)
      })
    }).catch(error => console.log({ error }))
  }
  return (
    <div>
      <div className="bg-light p-3 mt-3 rounded">
        <Form onSubmit={deleteTestData}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName" className="mb-3 col-12 col-sm-12 col-md-4 col-xl-3 col-lg-3">
              <Form.Control type="text" placeholder="Enter ID" onChange={(e: any) => setDeleteId(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName" className="mb-3 col-12 col-sm-12 col-md-4 col-xl-3 col-lg-3">
              <Button variant="primary" type="submit">Delete</Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </div>
  )
}
export default DeleteData