import { useQuery } from "@tanstack/react-query"
import { Table } from "react-bootstrap"
import { getStudentApi } from "../../../../../../services/ReactLearnTwoService"

export default function SelectData() {
  return (
    <>
      <p>This is example of <b>select</b></p>
      <ExampleOne />
      <ExampleTwo />
    </>
  )
}

export const ExampleOne = () => {
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
    select: (data) => data.payload.data,
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
            resp.data && resp.data.map((item: any, index: any) =>
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

export const ExampleTwo = () => {
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
    select: (data) => {
      const student = data.payload.data.map((val: any) => {
        return val.name
      })
      return student
    },
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
          </tr>
        </thead>
        <tbody>
          {
            resp.data && resp.data.map((item: any, index: any) =>
              <tr key={item}>
                <td>{index + 1}</td>
                <td>{item}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}