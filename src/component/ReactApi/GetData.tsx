import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

function GetData() {
  const [getStudent, setGetStudent] = useState({
    status: 0,
    msg: "",
    payload: {
      data: [],
      count: 0
    }
  })
  useEffect(() => {
    fetch('https://kisalayakgschool.com/api/getStudent?page=1&perPage=10', {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'required',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
      }
    }).then((result) => {
      result.json().then((response) => {
        setGetStudent(response)
      })
    })

    // fetch("https://kisalayakgschool.com/api/getStudent?page=1&perPage=10")
    //   .then(result => result.json())
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch(error => console.log({ error }))
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
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {
            getStudent.payload.data.map((item: any, index: any) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.class}</td>
                <td>{item.id}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default GetData
