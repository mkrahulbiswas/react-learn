import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getStudentApi } from "../../../../../../services/ReactLearnTwoService"
import { Table } from "react-bootstrap"
import { useState } from "react"

export default function InfiniteQueries() {
  return (
    <>
      <ExampleOne />
      <ExampleTwo />
    </>
  )
}

export const ExampleOne = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const resp = useQuery({
    queryKey: ['getStudentOne', currentPage],
    queryFn: async () => {
      try {
        const res = await getStudentApi(currentPage, 2)
        return res.data.status == 1 ? res.data : []
      } catch (error) {
        console.log(error)
        return []
      }
    },
    enabled: !!currentPage,
  })

  if (resp.isPending) return <p>Loading 1...</p>
  if (resp.isError) return <p>Error: {resp.error.message || 'Something Went Wrong'}</p>

  return (
    <>
      <div className="row">
        <p>This is example of <b>infinite queries</b> with next previous</p>
        <div className="col-md-12">
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
        </div>
        <div className="col-md-12">
          <div className="pagination justify-content-end">
            <button className="btn btn-sm btn-primary" disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            <span className="ps-3 pe-3">{currentPage} of {Math.ceil(resp.data?.payload.total / 2)}</span>
            <button className="btn btn-sm btn-primary" disabled={currentPage >= Math.ceil(resp.data?.payload.total / 2)} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export const ExampleTwo = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const resp = useQuery({
    queryKey: ['getStudentTwo', currentPage],
    queryFn: async () => {
      try {
        const res = await getStudentApi(currentPage, 2)
        return res.data.status == 1 ? res.data : []
      } catch (error) {
        console.log(error)
        return []
      }
    },
    enabled: !!currentPage,
    placeholderData: keepPreviousData
  })

  if (resp.isPending) return <p>Loading 1...</p>
  if (resp.isError) return <p>Error: {resp.error.message || 'Something Went Wrong'}</p>
  console.log(resp);

  return (
    <>
      <div className="row">
        <p>This is example of <b>infinite queries</b> with next previous, but hear we use <b>placeholder data</b> for kept previous data unless new data load in table</p>
        <div className="col-md-12">
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
        </div>
        <div className="col-md-12">
          <div className="pagination justify-content-end">
            <button className="btn btn-sm btn-primary" disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            <span className="ps-3 pe-3">{currentPage} of {Math.ceil(resp.data?.payload.total / 2)}</span>
            <button className="btn btn-sm btn-primary" disabled={currentPage >= Math.ceil(resp.data?.payload.total / 2)} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
          </div>
        </div>
        {
          resp.isFetching ? <div className="loading">...loading</div> : null
        }
      </div>
    </>
  )
}