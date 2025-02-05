import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

export default function ErrorHandling() {
  return (
    <>
      <p>Hear is the example of <b>error handling</b></p>
      <div className="row bg-light">
        <div className="col-6 p-3">
          <FetchWithAsync />
        </div>
        <div className="col-6 p-3">
          <FetchWithoutAsync />
        </div>
      </div>
      <hr />
    </>
  )
}

export function FetchWithAsync() {
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
          'appVersion': '1',
          'mode': 'test'
        }
      })
      const data = await res.json()
      if (data.status == 0) {
        console.warn(data.msg)
      } else {
        setGetTestData(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <p>Hear is <b>error handling</b> by using <b>fetch</b> <span style={{ color: 'red' }}>with using</span> <b>async</b></p>
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

export function FetchWithoutAsync() {
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
          'appVersion': '1',
          'mode': 'test'
        }
      }).then(res => res.json())
        .then(data => {
          if (data.status == 0) {
            console.warn(data.msg)
          } else {
            setGetTestData(data)
          }
        })
        .catch(err => {
          throw new Error("May the the request url is invalid" + err);
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
      <p>Hear is <b>error handling</b> by using <b>fetch</b> <span style={{ color: 'red' }}>without using</span> <b>async</b></p>
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