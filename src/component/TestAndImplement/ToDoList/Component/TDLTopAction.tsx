import moment from "moment"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { GrPowerReset } from "react-icons/gr"
import { IoMdSearch } from "react-icons/io"
import { MdOutlineNoteAdd } from "react-icons/md"

function TDLTopAction({ toDoListData, showModal, types }: any) {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const dateMow = moment().format('DD/MM/YYYY, h:mm:ss A');
      setDateTime(dateMow)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="toDo_topAction">
        <div className="toDo_total">
          <span>{toDoListData == null ? 0 : toDoListData.length}</span> Task found
        </div>
        <div className="toDo_timer">
          <span>{dateTime}</span>
        </div>
        <div className="toDo_filter">
          <div className="toDo_input">
            <input type="text" placeholder="Type to filter bellow list" />
          </div>
          <div className="toDo_action">
            <span className="toDo_search"><IoMdSearch /></span>
            <span className="toDo_reset"><GrPowerReset /></span>
          </div>
        </div>
        <div className="toDo_addTask">
          <Button variant="warning" className="btn-sm" onClick={() => showModal({ type: types[0] })}>
            <MdOutlineNoteAdd /> Add New Task
          </Button>
        </div>
      </div>
    </>
  )
}
export default TDLTopAction