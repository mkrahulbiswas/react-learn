import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Col, Form, Row, Table } from "react-bootstrap"
import { getStudent } from "../../../../services/ReactLearnTwoService"

export default function PostApi() {
  return (
    <>
      <WithUseFetch />
      <WithUseAsync />
      <WithUseAxios />
    </>
  )
}

export function WithUseFetch() {
  const [fromData, setFromData] = useState({ name: '', email: '', phone: '', class: '' })
  const saveTestData = (event: any) => {
    event.preventDefault()
    fetch('https://kisalayakgschool.com/api/saveTestData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'appVersion': '1'
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
        <Button variant="primary" type="submit">Save</Button>
      </Form>
      <hr />
    </div>
  )
}

export function WithUseAsync() {
  const [getTestData, setGetTestData] = useState({
    status: 0,
    msg: "",
    title: '',
    payload: {
      data: [],
      count: 0
    }
  })

  const getData = async () => {
    try {
      const res = await fetch("https://kisalayakgschool.com/api/getTestData", {
        method: 'GET',
        headers: {
          'X-Mashape-Key': 'required',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'appVersion': '1'
        }
      })
      const data = await res.json()
      setGetTestData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <p>Using <b>ASYNC</b> type</p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {
            getTestData.payload.data.map((item: any, index: any) =>
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.class}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
      <hr />
    </div>
  )
}

export function WithUseAxios() {
  const [getTestData, setGetTestData] = useState({
    status: 0,
    msg: "",
    title: '',
    payload: {
      data: [],
      count: 0
    }
  })

  const getDataOne = async () => {
    try {
      const res = await axios.get("https://kisalayakgschool.com/api/getTestData", {
        headers: {
          'X-Mashape-Key': 'required',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'appVersion': '1'
        }
      })
      setGetTestData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getDataTwo = async () => {
    try {
      const res = await getStudent()
      setGetTestData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataOne() // There we use axios in same page
    getDataTwo() // There we use axios in service page
  }, [])

  return (
    <div>
      <p>Using <b>AXIOS</b> type</p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {
            getTestData.payload.data.map((item: any, index: any) =>
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.class}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
      <hr />
    </div>
  )
}