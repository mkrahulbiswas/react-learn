import { useQuery } from "@tanstack/react-query"
import { Table } from "react-bootstrap"
import { getStudentApi } from "../../../../../../services/api-service"

export default function Polling() {
  return (
    <>
      <p>This is example of <b>polling</b></p>
      <ExampleOne />
    </>
  )
}

export const ExampleOne = () => {
  const getData = async () => {
    try {
      const res = await getStudentApi(1, 10)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent14'],
    queryFn: getData,
    refetchInterval: 100000,
    refetchIntervalInBackground: true // If we are in background
  })

  if (resp.isPending) return <p>Loading 1...</p>
  if (resp.isError) return <p>Error: {resp.error.message || 'Something Went Wrong'}</p>
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