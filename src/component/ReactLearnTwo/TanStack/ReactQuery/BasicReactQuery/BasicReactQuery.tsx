import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { getStudent } from "../../../../../services/ReactLearnTwoService"

export default function BasicReactQuery() {
  const queryClient = new QueryClient()
  return (
    <>
      <p>This is example of basic </p>
      <QueryClientProvider client={queryClient}>
        <OldTypeToStoreApiData />
        <NewTypeToStoreApiData />
      </QueryClientProvider>
    </>
  )
}


export const OldTypeToStoreApiData = () => {
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
      res.data.status == 1 ? setGetTestData(res.data) : []
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

export const NewTypeToStoreApiData = () => {
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