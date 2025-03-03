import { useQuery } from "@tanstack/react-query"
import { getStudentApi } from "../../../../../../services/api-service"
import { Table } from "react-bootstrap"

export default function ParallelQueries() {
  return (
    <>
      <p>This is example of <b>parallel queries</b></p>
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

  const respOne = useQuery({
    queryKey: ['getStudent12'],
    queryFn: getData,
  })
  const respTwo = useQuery({
    queryKey: ['getStudent13'],
    queryFn: getData,
  })

  return (
    <>
      <div className="row">
        <div className="col-6">
          <Table striped bordered hover variant="warning">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {
                respOne.data && respOne.data.payload.data.map((item: any, index: any) =>
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
        <div className="col-6">
          <Table striped bordered hover variant="warning">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {
                respTwo.data && respTwo.data.payload.data.map((item: any, index: any) =>
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.phone}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}