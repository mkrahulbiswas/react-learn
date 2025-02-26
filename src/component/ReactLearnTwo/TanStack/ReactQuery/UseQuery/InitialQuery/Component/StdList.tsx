import { useQuery } from "@tanstack/react-query"
import { Table } from "react-bootstrap"
import { Link } from "react-router"
import { getStudentApi } from "../../../../../../../services/ReactLearnTwoService"

export default function StdList() {

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
    queryKey: ['getStudent11'],
    queryFn: getData,
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
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {
            resp.data && resp.data.payload.data.map((item: any, index: any) =>
              <tr key={item.idOrg}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/detail/${item.idOrg}`}>
                    <button className="btn btn-sm btn-success">Detail</button>
                  </Link>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}