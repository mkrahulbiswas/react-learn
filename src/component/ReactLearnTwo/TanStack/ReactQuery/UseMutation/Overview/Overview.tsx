import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Table } from "react-bootstrap"
import { deleteStudentApi, getStudentApi } from "../../../../../../services/ReactLearnTwoService"

export default function Overview() {
  return (
    <>
      <p>This is example <b>use mutation</b>. Use Mutation is used for add, update or delete any data.</p>
      <ExampleOne />
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
    queryKey: ['getStudent7'],
    queryFn: getData,
  })

  const respTwo = useMutation({
    mutationFn: (id) => deleteData(id),
    onSuccess: (data, id) => {
      queryClient.invalidateQueries({ queryKey: ['getStudent7'] })
    }
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
                  <button className="btn btn-sm btn-success" onClick={() => respTwo.mutate(item.idOrg)}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}