import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Table } from "react-bootstrap"
import { statusStudentApi, getStudentApi } from "../../../../../../services/ReactLearnTwoService"

export default function InCaseOfStatus() {
  return (
    <>
      <ExampleOne />
      <ExampleTwo />
    </>
  )
}

export const ExampleOne = () => {
  const queryClient = useQueryClient();

  const getData = async () => {
    try {
      const res = await getStudentApi(1, 10)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const deleteData = async (id: any) => {
    try {
      const res = await statusStudentApi(id)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent7'],
    queryFn: getData,
  })

  const respTwo = useMutation({
    mutationFn: (id) => deleteData(id),
    onSuccess: (_data, _id) => {
      queryClient.invalidateQueries({ queryKey: ['getStudent7'] })
    }
  })

  return (
    <>
      <p>Hear we update the list after delete data by calling the api again</p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
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
                  {
                    item.status == 1 ? <span>Active</span> : <span>Inactive</span>
                  }
                </td>
                <td>
                  <button className="btn btn-sm btn-warning" onClick={() => respTwo.mutate(item.idOrg)}>Status</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}

export const ExampleTwo = () => {
  const queryClient = useQueryClient();

  const getData = async () => {
    try {
      const res = await getStudentApi(1, 10)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const deleteData = async (id: any) => {
    try {
      const res = await statusStudentApi(id)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent22'],
    queryFn: getData,
  })

  const respTwo = useMutation({
    mutationFn: (id) => deleteData(id),
    onSuccess: (_data, id) => {
      queryClient.setQueryData(['getStudent22'], (oldData: any) => {
        return {
          ...oldData,
          payload: {
            ...oldData.payload,
            data: oldData.payload.data.filter((element: any) => element.idOrg !== id)
          }
        }
      })
    }
  })

  return (
    <>
      <p>Hear we update the list after delete data by changing in cache data</p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
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
                  {
                    item.status == 1 ? <span>Active</span> : <span>Inactive</span>
                  }
                </td>
                <td>
                  <button className="btn btn-sm btn-warning" onClick={() => respTwo.mutate(item.idOrg)}>Status</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}