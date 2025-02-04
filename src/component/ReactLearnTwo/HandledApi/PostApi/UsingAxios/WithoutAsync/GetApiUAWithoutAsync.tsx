import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { getStudent } from "../../../../../../services/ReactLearnTwoService"

export default function WithoutAsync() {
  return (
    <>
      <p>Hear is the example of <b>axios</b> <span style={{ color: 'red' }}>without using</span> <b>async await</b> type</p>
      <div className="row bg-light">
        <div className="col-6 p-3">
          <WithoutUsingService />
        </div>
        <div className="col-6 p-3">
          <WithUsingService />
        </div>
      </div>
      <hr />
    </>
  )
}

export function WithoutUsingService() {
  const [getTestData, setGetTestData] = useState({
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
      axios.get("https://kisalayakgschool.com/api/getTestData", {
        headers: {
          'X-Mashape-Key': 'required',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'appVersion': '1'
        }
      }).then((res) => {
        setGetTestData(res.data)
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
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>without using</span> any <b>services</b></p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            getTestData.payload.data.map((item: any, index: any) =>
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

export function WithUsingService() {
  const [getTestData, setGetTestData] = useState({
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
      getStudent().then((res) => {
        setGetTestData(res.data)
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
      <p>Hear we use <b>axios</b> <span style={{ color: 'red' }}>with using</span> any <b>services</b></p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            getTestData.payload.data.map((item: any, index: any) =>
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