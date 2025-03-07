import { useEffect, useState } from "react"
import { apiConst } from "../../../../../../config/constants"
import ReactPaginate from "react-paginate"

export const ExampleTwo = () => {
  const [studentList, setStudentList] = useState({
    status: 0,
    msg: "",
    title: '',
    payload: {
      data: [],
      count: 0,
      current_page: 1,
      last_page: 1
    }
  })

  const getStudent = (page: any) => {
    try {
      fetch(apiConst.baseURL + apiConst.studentApi.getEP + "?page=" + page + "&perPage=12", {
        method: 'GET',
        headers: apiConst.header
      }).then(res => res.json())
        .then(data => {
          setStudentList(data)
        })
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  const handlePageClick = (event: any) => {
    getStudent(event.selected + 1)
  }

  useEffect(() => {
    getStudent(1)
  }, [])
  return (
    <div className="exampleCommon fullWidth">
      <div className="exampleCommonPoints">
        <span>This an example by using a live <b>API</b> response</span>
      </div>
      <div className="exampleCommonContent">
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."

          pageCount={studentList?.payload.last_page}
          pageRangeDisplayed={0}
          marginPagesDisplayed={3}
          onPageChange={handlePageClick}

          containerClassName="pagination justify-content-center"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"


          hrefBuilder={(page, pageCount, selected) =>
            page >= 1 && page <= pageCount ? `/page/${page}` : '#'
          }
          hrefAllControls
          forcePage={studentList?.payload.current_page - 1}
          onClick={(clickEvent) => {
            // console.log('onClick', clickEvent);
          }}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}