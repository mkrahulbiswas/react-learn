import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

export default function UsingFetch() {
  return (
    <>
      <p>Hear is the example of <b>fetch</b> API</p>
      <div className="row bg-light">
        <div className="col-6 p-3">
          <WithAsync />
        </div>
        <div className="col-6 p-3">
          <WithoutAsync />
        </div>
      </div>
      <hr />
    </>
  )
}

export function WithAsync() {
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
      <p>Hear we use <b>fetch</b> <span style={{ color: 'red' }}>with using</span> <b>async</b></p>
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

export function WithoutAsync() {
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
      fetch("https://kisalayakgschool.com/api/getTestData", {
        method: 'GET',
        headers: {
          'X-Mashape-Key': 'required',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'appVersion': '1'
        }
      }).then(res => res.json())
        .then(data => setGetTestData(data))
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <p>Hear we use <b>fetch</b> <span style={{ color: 'red' }}>without using</span> <b>async</b></p>
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