import { useEffect, useState } from "react";
import ErrorHandling from "./ErrorHandling/ErrorHandling";
import UsingAxios from "./UsingAxios/UsingAxios";
import UsingFetch from "./UsingFetch/UsingFetch";
import { Table } from "react-bootstrap";

export default function PostApi() {
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
    <>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {
            getTestData.payload.data.map((item: any) =>
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
      <UsingFetch />
      <ErrorHandling />
      <UsingAxios />
    </>
  )
}

