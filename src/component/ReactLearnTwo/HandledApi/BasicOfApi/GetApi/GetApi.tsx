import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { getStudent } from "../../../../../services/ReactLearnTwoService"

export default function GetApi() {
  return (
    <>
      {/* <WithUseUseEffect /> */}
      {/* <WithUseAsync /> */}
      <WithUseAxios />
      {/* <WithoutUseUseEffect /> */}
    </>
  )
}

export function WithUseUseEffect() {
  const [getTestData, setGetTestData] = useState({
    status: 0,
    msg: "",
    payload: {
      data: [],
      count: 0
    }
  })
  useEffect(() => {
    fetch("https://kisalayakgschool.com/api/getTestData", {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'required',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'appVersion': '1'
      }
    }).then(result => result.json())
      .then((response) => {
        setGetTestData(response)
      })
      .catch(error => console.log({ error }))
  }, [])
  return (
    <div>
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

export function WithoutUseUseEffect() {
  const [getTestData, setGetTestData] = useState({
    status: 0,
    msg: "",
    payload: {
      data: [],
      count: 0
    }
  })
  fetch("https://kisalayakgschool.com/api/getTestData", {
    method: 'GET',
    headers: {
      'X-Mashape-Key': 'required',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'appVersion': '1'
    }
  }).then(result => result.json()).then((response) => {
    setGetTestData(response)
  }).catch(error => console.log({ error }))
  return (
    <div>
      <p>If you fetch api without using use effect than the api is call infinite loop</p>
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