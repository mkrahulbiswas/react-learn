import { useEffect, useState } from "react";
import UsingAxios from "./UsingAxios/UsingAxios";
import UsingFetch from "./UsingFetch/UsingFetch";
import { Table } from "react-bootstrap";
import ErrorHandling from "./ErrorHandling/ErrorHandling";

export default function PutApi() {
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
      const res = await fetch("https://kisalayakgschool.com/api/getStudent", {
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
      setGetStudent(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
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
            getStudent.payload.data.map((item: any) =>
              <tr key={item.id}>
                <td>{item.idOrg}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.class}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
      <br /><br />
      <UsingAxios getData={getData} />
      <UsingFetch getData={getData} />
      <ErrorHandling getData={getData} />
    </>
  )
}

