import { useQueries } from "@tanstack/react-query"
import { detailStudentApi } from "../../../../../../services/ReactLearnTwoService"
import { Table } from "react-bootstrap"

export default function CombineDynamicParallelQueries() {
  return (
    <>
      <p>This is example of <b>combine dynamic parallel queries</b> by using <b>use query</b></p>
      <ExampleOne ids={[104, 106, 107, 108]} />
    </>
  )
}

export const ExampleOne = ({ ids }: any) => {
  const getData = async (id: any) => {
    try {
      const res = await detailStudentApi(id)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQueries({
    queries: ids.map((val: any) => {
      return {
        queryKey: ['detailStudent', val],
        queryFn: () => getData(val),
      }
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      }
    },
  })

  return (
    <>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {
            resp && resp.data.map((item: any, index: any) =>
              <tr key={index}>
                <td>{item?.data.name}</td>
                <td>{item?.data.phone}</td>
                <td>{item?.data.email}</td>
                <td>{item?.data.class}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}