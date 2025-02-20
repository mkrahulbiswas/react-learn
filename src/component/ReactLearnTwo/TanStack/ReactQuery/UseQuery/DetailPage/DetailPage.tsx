import { useQuery } from "@tanstack/react-query"
import { Table } from "react-bootstrap"
import { detailStudentApi, getStudentApi } from "../../../../../../services/ReactLearnTwoService"
import { useState } from "react"

export default function DetailPage() {
  const [studentId, setStudentId] = useState(0)

  const respOne = useQuery({
    queryKey: ['getStudent'],
    queryFn: async () => {
      try {
        const res = await getStudentApi()
        return res.data.status == 1 ? res.data : []
      } catch (error) {
        console.log(error)
        return []
      }
    },
  })

  const getStudentDetail = (id: any) => {
    setStudentId(id)
    respTwo.refetch()
  }

  const respTwo = useQuery({
    queryKey: ['detailStudent'],
    queryFn: async () => {
      try {
        if (studentId == 0) {
          return []
        } else {
          const res = await detailStudentApi(studentId)
          return res.data.status == 1 ? res.data : []
        }
      } catch (error) {
        console.log(error)
        return []
      }
    }
  })

  console.log(respTwo);


  if (respOne.isPending) return <p>Loading 1...</p>
  if (respOne.isError) return <p>Error: {respOne.error.message || 'Something Went Wrong'}</p>

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
            respOne.data && respOne.data.payload.data.map((item: any, index: any) =>
              <tr key={item.idOrg}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <button className="btn btn-sm btn-success" onClick={() => getStudentDetail(item.idOrg)}>Detail</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}