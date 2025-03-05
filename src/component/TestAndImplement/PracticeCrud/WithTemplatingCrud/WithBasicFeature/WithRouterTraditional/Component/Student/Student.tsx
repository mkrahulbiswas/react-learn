import { useContext, useEffect, useState } from "react";
import { apiConst } from "../../../../../../../../config/constants";
import { List } from "./List";
import { toast } from "react-toastify";
import { LoaderContext } from "../../Context/LoaderContext";
import ReactPaginate from 'react-paginate';

export const Student = () => {
  const { setLoader }: any = useContext(LoaderContext)

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
    setLoader(true)
    try {
      fetch(apiConst.baseURL + apiConst.studentApi.getEP + "?page=" + page + "&perPage=12", {
        method: 'GET',
        headers: apiConst.header
      }).then(res => res.json())
        .then(data => {
          setLoader(false)
          setStudentList(data)
        })
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  const deleteStudent = (id: any) => {
    setLoader(true)
    fetch(`${apiConst.baseURL + apiConst.studentApi.deleteEP}/${id}`, {
      method: 'DELETE',
      headers: apiConst.header
    }).then((result) => {
      result.json().then((response) => {
        console.log('Without Async-->', response)
        // toast.success('dataPass.msg', 'option');
        getStudent(1)
      })
    }).catch(error => console.log({ error }))
  }

  const statusStudent = (id: any) => {
    setLoader(true)
    fetch(`${apiConst.baseURL + apiConst.studentApi.statusEP}/${id}`, {
      method: 'PATCH',
      headers: apiConst.header
    }).then((result) => {
      result.json().then((response) => {
        console.log('Without Async-->', response)
        // toast.success('dataPass.msg', 'option');
        getStudent(1)
      })
    }).catch(error => console.log({ error }))
  }

  const handlePageClick = (event: any) => {
    getStudent(event.selected + 1)
  }

  useEffect(() => {
    getStudent(1)
  }, [])

  return (
    <section className="studentPage">
      <div className="top">
        <div className="filter">
          <input type="text" placeholder="Search..." />
          <button className="btn btn-sm btn-info">Search</button>
        </div>
        <div className="action">
          <button className="btn btn-sm btn-success">Add New</button>
        </div>
      </div>
      <div className="middle">
        <div className="list">
          {
            studentList.payload.data.map((item: any) => {
              return (
                <List key={item.id} data={item} handelMethod={{ deleteStudent, statusStudent }} />
              )
            })
          }
        </div>
      </div>
      <div className="bottom">
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
        {/* <div className="pagination">
          {
            Array.from(Array(studentList.payload?.last_page)).map((_, i: number) => {
              return (
                <>
                  {i}
                  <span className="pageCount" key={i} onClick={() => goToAnotherPage(i + 1)}>{i + 1}</span>
                </>
              )
            })
          }
        </div> */}
      </div>
    </section >
  )
}