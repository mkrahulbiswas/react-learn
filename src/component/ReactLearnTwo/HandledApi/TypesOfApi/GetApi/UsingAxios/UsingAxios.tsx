import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { getStudentApi } from "../../../../../../services/api-service"

export default function UsingAxios() {
  return (
    <>
      <p>Hear is the example of <b>get api</b> by using <b>axios</b> <span style={{ color: 'red' }}>without using</span> <b>async await</b> type</p>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
          <WithoutAsyncAndService />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
          <WithoutAsyncButWithService />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
          <WithAsyncButWithoutService />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
          <WithAsyncAndService />
        </div>
      </div>
      <hr />
    </>
  )
}

export function WithoutAsyncAndService() {
  const [getStudent, setGetStudent] = useState({
    status: 0,
    msg: "",
    title: '',
    payload: {
      data: [],
      count: 0
    }
  })

  const getData = () => {
    try {
      axios.get("https://kisalayakgschool.com/api/getStudent?page=1&perPage=10", {
        headers: {
          'X-Mashape-Key': 'required',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'appVersion': '1',
          'mode': 'test'
        }
      }).then((res) => {
        setGetStudent(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>without using</span> <b>services</b> and <b>async</b></p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            getStudent.payload.data.map((item: any, index: any) =>
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export function WithoutAsyncButWithService() {
  const [getStudent, setGetStudent] = useState({
    status: 0,
    msg: "",
    title: '',
    payload: {
      data: [],
      count: 0
    }
  })

  const getData = () => {
    try {
      getStudentApi(1, 10).then((res) => {
        setGetStudent(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>with using</span> <b>services</b> but not <b>async</b></p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            getStudent.payload.data.map((item: any, index: any) =>
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export function WithAsyncButWithoutService() {
  const [getStudent, setGetStudent] = useState({
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
      const res = await axios.get("https://kisalayakgschool.com/api/getStudent?page=1&perPage=10", {
        headers: {
          'X-Mashape-Key': 'required',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'appVersion': '1',
          'mode': 'test'
        }
      })
      setGetStudent(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>without using</span> <b>services</b> but with <b>async</b></p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            getStudent.payload.data.map((item: any, index: any) =>
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export function WithAsyncAndService() {
  const [getStudent, setGetStudent] = useState({
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
      const res = await getStudentApi(1, 10)
      setGetStudent(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>with using</span> <b>services</b> and <b>async</b></p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            getStudent.payload.data.map((item: any, index: any) =>
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}