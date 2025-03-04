import { useEffect, useState } from "react";
import { apiConst } from "../../../../../../../../config/constants";
import { List } from "./List";
import { toast } from "react-toastify";

export const Student = () => {
  const [studentList, setStudentList] = useState({
    status: 0,
    msg: "",
    title: '',
    payload: {
      data: [],
      count: 0
    }
  })

  const getStudent = () => {
    try {
      fetch(apiConst.baseURL + apiConst.studentApi.getEP + "?page=1&perPage=10", {
        method: 'GET',
        headers: apiConst.header
      }).then(res => res.json())
        .then(data => setStudentList(data))
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  const deleteStudent = (id: any) => {
    fetch(`${apiConst.baseURL + apiConst.studentApi.deleteEP}/${id}`, {
      method: 'DELETE',
      headers: apiConst.header
    }).then((result) => {
      result.json().then((response) => {
        console.log('Without Async-->', response)
        // toast.success('dataPass.msg', 'option');
        getStudent()
      })
    }).catch(error => console.log({ error }))
  }

  const statusStudent = (id: any) => {
    fetch(`${apiConst.baseURL + apiConst.studentApi.statusEP}/${id}`, {
      method: 'PATCH',
      headers: apiConst.header
    }).then((result) => {
      result.json().then((response) => {
        console.log('Without Async-->', response)
        getStudent()
      })
    }).catch(error => console.log({ error }))
  }

  useEffect(() => {
    getStudent()
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
        pagination
      </div>
    </section>
  )
}