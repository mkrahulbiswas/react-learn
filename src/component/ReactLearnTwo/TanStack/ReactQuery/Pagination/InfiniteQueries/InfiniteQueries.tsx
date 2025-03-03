import { useInfiniteQuery } from "@tanstack/react-query"
import { getStudentApi } from "../../../../../../services/api-service"
import { Table } from "react-bootstrap"
import { Fragment, useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function InfiniteQueries() {
  return (
    <>
      <ExampleOne />
      <ExampleTwo />
      <ExampleThree />
    </>
  )
}

export const ExampleOne = () => {
  const resp = useInfiniteQuery({
    queryKey: ['getStudent5'],
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
        <p>This is example of <b>infinite queries</b> with lode more button</p>
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
    queryKey: ['getStudent6'],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const res = await getStudentApi(pageParam, 50)
        return res.data.status == 1 ? res.data : []
      } catch (error) {
        console.log(error)
        return []
      }
    },

    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      return allPage.length <= lastPage.payload.last_page ? allPage.length + 1 : undefined
    },
  })

  const handelScroll = () => {
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;
    if (bottom) {
      // if (bottom && resp.hasNextPage) {
      resp.fetchNextPage()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handelScroll)
    return () => window.removeEventListener('scroll', handelScroll)
  }, [])

  if (resp.isPending) return <p>Loading 1...</p>
  if (resp.isError) return <p>Error: {resp.error.message || 'Something Went Wrong'}</p>

  return (
    <>
      <div className="row">
        <p>This is example of <b>infinite queries</b> with on scroll</p>
        <div className="col-md-12 d-flex flex-wrap justify-content-center gap-3">
          {
            resp.data && resp.data?.pages.map((group: any, indexOne: any) => {
              return (
                <Fragment key={indexOne}>
                  {
                    group && group.payload.data.map((item: any, indexTwo: any) => (
                      <div className="p-3 bg-light" key={indexTwo}>
                        <span className="d-block"><b>Name:</b> {item.name}</span>
                        <span className="d-block"><b>Phone:</b> {item.phone}</span>
                        <span className="d-block"><b>Email:</b> {item.email}</span>
                      </div>
                    ))
                  }
                </Fragment>
              )
            })
          }
        </div>
        <div className="loading">{resp.isFetching && !resp.isFetchingNextPage ? 'Fetching...' : null}</div>
      </div>
    </>
  )
}

export const ExampleThree = () => {
  const resp = useInfiniteQuery({
    queryKey: ['getStudent6'],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const res = await getStudentApi(pageParam, 50)
        return res.data.status == 1 ? res.data : []
      } catch (error) {
        console.log(error)
        return []
      }
    },

    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      return allPage.length <= lastPage.payload.last_page ? allPage.length + 1 : undefined
    },
  })

  const { ref, inView }: any = useInView({ threshold: 1 })

  useEffect(() => {
    if (inView) {
      resp.fetchNextPage()
    }
  }, [inView])

  return (
    <>
      <div className="row">
        <p>This is example of <b>infinite queries</b> with on scroll by using <b>react-intersection-observer</b> package</p>
        <div className="col-md-12 d-flex flex-wrap justify-content-center gap-3">
          {
            resp.data && resp.data?.pages.map((group: any, indexOne: any) => {
              return (
                <Fragment key={indexOne}>
                  {
                    group && group.payload.data.map((item: any, indexTwo: any) => (
                      <div className="p-3 bg-light" key={indexTwo}>
                        <span className="d-block"><b>Name:</b> {item.name}</span>
                        <span className="d-block"><b>Phone:</b> {item.phone}</span>
                        <span className="d-block"><b>Email:</b> {item.email}</span>
                      </div>
                    ))
                  }
                </Fragment>
              )
            })
          }
        </div>
        <div ref={ref} className="loading">{resp.isFetchingNextPage ? 'Loading More...' : resp.hasNextPage ? 'Scroll down to load more' : 'No more data'}</div>
      </div>
    </>
  )
}