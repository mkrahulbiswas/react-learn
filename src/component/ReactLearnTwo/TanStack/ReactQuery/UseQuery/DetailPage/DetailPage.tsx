import { useQuery } from "@tanstack/react-query"
import { Table } from "react-bootstrap"
import { getStudentApi } from "../../../../../../services/ReactLearnTwoService"

export default function DetailPage() {
  const getData = async () => {
    try {
      const res = await getStudentApi()
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

  if (resp.isPending) return <p>Loading 1...</p>
  if (resp.isError) return <p>Error: {resp.error.message || 'Something Went Wrong'}</p>

  return (
    <>
      <p>This is example of <b>detail page</b> by using <b>use query</b></p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Detail</th>
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
                <td>
                  <button className="btn btn-sm btn-success">Detail</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
      <StudentDetails />
    </>
  )
}

export const StudentDetails = () => {
  const getData = async () => {
    try {
      const res = await getStudentApi()
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

  if (resp.isPending) return <p>Loading 1...</p>
  if (resp.isError) return <p>Error: {resp.error.message || 'Something Went Wrong'}</p>
  return (
    <>
      a
    </>
  )
}