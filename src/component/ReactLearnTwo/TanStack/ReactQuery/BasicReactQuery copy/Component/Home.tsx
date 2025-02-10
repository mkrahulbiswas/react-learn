import { Table } from "react-bootstrap";
import { getStudent } from "../../../../../../services/ReactLearnTwoService";
import { useEffect, useState } from "react";

export default function Home() {
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
      const res = await getStudent()
      res.status == 1 ? setGetTestData(res.data) : []
    } catch (error) {
      console.log(error)
      return []
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
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            getTestData.payload.data.map((item: any, index: any) =>
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}