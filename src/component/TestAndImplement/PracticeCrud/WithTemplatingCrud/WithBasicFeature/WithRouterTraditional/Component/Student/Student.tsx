import { useEffect, useState } from "react";
import { apiConst } from "../../../../../../../../config/constants";
import { List } from "./List";

export const Student = () => {
  const [getStudent, setGetStudent] = useState({
    status: 0,
    msg: "",
    title: '',
    payload: {
      data: [],
      count: 0
    }
  })

  const getData = () => {
    try {
      fetch(apiConst.baseURL + apiConst.studentApi.getEP + "?page=1&perPage=10", {
        method: 'GET',
        headers: apiConst.header
      }).then(res => res.json())
        .then(data => setGetStudent(data))
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
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
            getStudent.payload.data.map((item: any) => {
              return (
                <List key={item.id} data={item} />
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