import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Table } from "react-bootstrap"
import { deleteStudentApi, getStudentApi } from "../../../../../../services/ReactLearnTwoService"

export default function InCaseOfDelete() {
  return (
    <>
      <ExampleOne />
      <ExampleTwo />
      <ExampleThree />
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
      const res = await deleteStudentApi(id)
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
    onSuccess: (_data, _id) => {
      queryClient.invalidateQueries({ queryKey: ['getStudent22'] })
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
                  <button className="btn btn-sm btn-danger" onClick={() => respTwo.mutate(item.idOrg)}>Delete</button>
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
      const res = await deleteStudentApi(id)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent23'],
    queryFn: getData,
  })

  const respTwo = useMutation({
    mutationFn: (id) => deleteData(id),
    onSuccess: (_data, id) => {
      queryClient.setQueryData(['getStudent23'], (oldData: any) => {
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
                  <button className="btn btn-sm btn-danger" onClick={() => respTwo.mutate(item.idOrg)}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}

export const ExampleThree = () => {
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
      const res = await deleteStudentApi(id)
      return res.data.status == 1 ? res.data : []
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const resp = useQuery({
    queryKey: ['getStudent24'],
    queryFn: getData,
  })

  const respTwo = useMutation({
    mutationFn: (id) => deleteData(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['getStudent24'] })
      const prevData = queryClient.getQueryData(['getStudent24'])
      queryClient.setQueryData(['getStudent24'], (oldData: any) => {
        return {
          ...oldData,
          payload: {
            ...oldData.payload,
            data: oldData.payload.data.filter((element: any) => element.idOrg !== id)
          }
        }
      })
      return { prevData }
    },
    onError: (_error, _data, context) => {
      queryClient.setQueryData(['getStudent24'], context?.prevData)
    },
    onSettled: (_data) => {
      queryClient.invalidateQueries({ queryKey: ['getStudent24'] })
    },
  })

  return (
    <>
      <p>Hear we update the list after delete data by using <b>optimistic update</b></p>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
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
                  <button className="btn btn-sm btn-danger" onClick={() => respTwo.mutate(item.idOrg)}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}