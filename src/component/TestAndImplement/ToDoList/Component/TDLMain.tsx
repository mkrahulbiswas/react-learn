import { useState } from "react";
import TDLList from "./TDLList";
import TDLTopAction from "./TDLTopAction";
import TDLModal from "./TDLModal";

function TDLMain() {
  const [toDoListData, setToDoListData] = useState(() => {
    let getToDoListData: any = localStorage.getItem('toDoListData')
    if (getToDoListData !== '') {
      return JSON.parse(getToDoListData)
    } else {
      return [];
    }
  })
  const [modalDisplay, setModalDisplay] = useState({
    isDisplay: false,
    type: ''
  });
  const [formData, setFormData] = useState({
    title: '',
    detail: '',
    date: '',
    time: '',
    reminder: false,
  });
  const types = ['add', 'edit']

  const showModal = (dataPass: any) => {
    setModalDisplay({ isDisplay: true, type: dataPass.type })
    if (dataPass.type === types[1]) {
      setFormData({
        title: dataPass.data.title,
        detail: dataPass.data.detail,
        date: dataPass.data.date,
        time: dataPass.data.time,
        reminder: dataPass.data.reminder,
      })
    }
  }

  const deleteData = (dataPass: any) => {
    let filteredItems: any = toDoListData.filter((item: any) => item.title !== dataPass.title)
    setToDoListData(filteredItems)
    localStorage.setItem('toDoListData', JSON.stringify(toDoListData));
  }

  return (
    <section className="toDo_main">
      <div className="toDo_sub">
        <div className="toDo_top">
          <TDLTopAction toDoListData={toDoListData} showModal={showModal} types={types} />
        </div>
        <div className="toDo_bottom">
          <TDLList toDoListData={toDoListData} showModal={showModal} deleteData={deleteData} types={types} />
        </div>
      </div>
      <TDLModal paramPass={{
        modalDisplay: modalDisplay,
        setModalDisplay: setModalDisplay,
        showModal: showModal,
        formData: formData,
        setFormData: setFormData,
        toDoListData: toDoListData,
        setToDoListData: setToDoListData,
        types: types,
      }} />
    </section>
  )
}
export default TDLMain