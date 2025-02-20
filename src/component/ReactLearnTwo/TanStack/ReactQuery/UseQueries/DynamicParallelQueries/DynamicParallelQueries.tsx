import { useQueries } from "@tanstack/react-query"
import { Table } from "react-bootstrap"
import { detailStudentApi } from "../../../../../../services/ReactLearnTwoService"

export default function DynamicParallelQueries() {
  return (
    <>
      <p>This is example of <b>dynamic parallel queries</b> by using <b>use query</b></p>
      <ExampleOne ids={[104, 106]} />
      <ExampleTwo ids={[107, 108]} />
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
    queries: ids.map((val: any) => ({
      queryKey: ['detailStudent', val],
      queryFn: () => getData(val),
    }))
  })

  return (
    <>
      {
        resp && resp.map((item: any, index: any) => {
          return (
            <Table striped bordered hover variant="warning" key={index} >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.data?.data.name}</td>
                  <td>{item.data?.data.phone}</td>
                  <td>{item.data?.data.email}</td>
                  <td>{item.data?.data.class}</td>
                </tr>
              </tbody>
            </Table >
          )
        }
        )
      }
    </>
  )
}

export const ExampleTwo = ({ ids }: any) => {
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
    })
  })

  return (
    <>
      {
        resp && resp.map((item: any, index: any) =>
          <Table striped bordered hover variant="warning" key={index}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.data?.data.name}</td>
                <td>{item.data?.data.phone}</td>
                <td>{item.data?.data.email}</td>
                <td>{item.data?.data.class}</td>
              </tr>
            </tbody>
          </Table>
        )
      }
    </>
  )
}