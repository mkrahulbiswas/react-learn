import { useQuery } from "@tanstack/react-query"
import { detailStudentApi, getStudentApi } from "../../../../../../services/ReactLearnTwoService"
import { Table } from "react-bootstrap"

export default function UsingUseQuery() {
  return (
    <>
      <p>This is example of <b>dependent queries</b></p>
      <ExampleOne />
      {/* <ExampleTwo ids={[104]} /> */}
    </>
  )
}

export const ExampleOne = () => {

  const respOne = useQuery({
    queryKey: ['getStudent'],
    queryFn: async () => {
      try {
        const res = await getStudentApi(1, 10)
        return res.data.status == 1 ? res.data : []
      } catch (error) {
        console.log(error)
        return []
      }
    }
  })

  const respTwo = useQuery({
    queryKey: ['getStudentDetail', respOne],
    queryFn: async () => {
      console.log(respOne);

      try {
        const res = await detailStudentApi(respOne.data)
        return res.data.status == 1 ? res.data : []
      } catch (error) {
        console.log(error)
        return []
      }
    },
    enabled: !!respOne
  })

  // console.log(respOne.data);
  // console.log(respTwo);


  // const getData = async (id: any) => {
  //   try {
  //     const res = await detailStudentApi(id)
  //     return res.data.status == 1 ? res.data : []
  //   } catch (error) {
  //     console.log(error)
  //     return []
  //   }
  // }

  // const resp = useQueries({
  //   queries: ids.map((val: any) => {
  //     return {
  //       queryKey: ['detailStudent', val],
  //       queryFn: () => getData(val),
  //     }
  //   }),
  //   combine: (results) => {
  //     return {
  //       data: results.map((result) => result.data),
  //       pending: results.some((result) => result.isPending),
  //     }
  //   },
  // })

  return (
    <>
      {/* <Table striped bordered hover variant="warning">
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
      </Table> */}
    </>
  )
}