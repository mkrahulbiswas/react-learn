import { useInfiniteQuery } from "@tanstack/react-query"
import { getStudentApi } from "../../../../../../services/ReactLearnTwoService"
import { Table } from "react-bootstrap"
import { Fragment } from "react"

export default function InfiniteQueries() {
  return (
    <>
      <ExampleOne />
      {/* <ExampleTwo /> */}
    </>
  )
}

export const ExampleOne = () => {
  const resp = useInfiniteQuery({
    queryKey: ['getStudentOne'],
    queryFn: async ({ pageParam }) => {
      try {
        const res = await getStudentApi(pageParam, 2)
        return res.data.status == 1 ? res.data : []
      } catch (error) {
        console.log(error)
        return []
      }
    },

    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < lastPage.payload.last_page) {
        return pages.length + 1
      } else {
        return undefined
      }
    },
    // maxPages: 2, if you set this it will show only two page of latest data
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
                resp.data && resp.data?.pages.map((group: any, index: any) => {
                  return (
                    <Fragment key={index}>
                      {
                        group && group.payload.data.map((item: any, index: any) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                          </tr>
                        ))
                      }
                    </Fragment>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
        <div className="col-md-12">
          <button onClick={() => resp.fetchNextPage()} disabled={!resp.hasNextPage || resp.isFetchingNextPage}>{resp.isFetchingNextPage ? 'Loading more...' : resp.hasNextPage ? 'Load More' : 'Nothing more to load'}</button>
        </div>
        <div className="loading">{resp.isFetching && !resp.isFetchingNextPage ? 'Fetching...' : null}</div>
      </div>
    </>
  )
}

export const ExampleTwo = () => {
  const resp = useInfiniteQuery({
    queryKey: ['getStudentOne'],
    queryFn: async ({ pageParam }) => {
      try {
        const res = await getStudentApi(pageParam, 2)
        return res.data.status == 1 ? res.data : []
      } catch (error) {
        console.log(error)
        return []
      }
    },

    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage);

      if (pages.length < lastPage.payload.last_page) {
        return pages.length + 1
      } else {
        return undefined
      }
    },
    // getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    // getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,
    // maxPages: 3,
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
                resp.data && resp.data?.pages.map((group: any, index: any) => {
                  return (
                    <Fragment key={index}>
                      {
                        group && group.payload.data.map((item: any, index: any) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                          </tr>
                        ))
                      }
                    </Fragment>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
        <div className="col-md-12">
          <button onClick={() => resp.fetchNextPage()} disabled={!resp.hasNextPage || resp.isFetchingNextPage}>{resp.isFetchingNextPage ? 'Loading more...' : resp.hasNextPage ? 'Load More' : 'Nothing more to load'}</button>
        </div>
        <div className="loading">{resp.isFetching && !resp.isFetchingNextPage ? 'Fetching...' : null}</div>
      </div>
    </>
  )
}