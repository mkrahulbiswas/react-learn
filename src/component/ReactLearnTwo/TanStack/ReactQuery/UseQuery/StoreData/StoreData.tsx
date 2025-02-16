import { useQuery } from "@tanstack/react-query"
import { Table } from "react-bootstrap"
import { getStudent } from "../../../../../../services/ReactLearnTwoService"

export default function StoreData() {
  return (
    <>
      <p>This is example of how to <b>store data</b> by using <b>use query</b></p>
      <ExampleOne />
    </>
  )
}

export const ExampleOne = () => {
  const getData = async () => {
    try {
      const res = await getStudent()
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent'],
    queryFn: getData,
  })

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
            resp.data && resp.data.payload.data.map((item: any, index: any) =>
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