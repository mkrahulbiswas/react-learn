import { IoMdDoneAll } from "react-icons/io"
import { MdDateRange, MdDeleteForever, MdModeEdit, MdOutlineAccessTime } from "react-icons/md"

function TDLList({ toDoListData, deleteData, showModal, types }: any) {
  return (
    <>
      <div className="toDo_list">
        {
          toDoListData == null ?
            <div>
              <span>No data found</span>
            </div> :
            toDoListData.map((val: any, key: any) =>
              <div className="toDo_items" key={key}>
                <div className="toDo_left">
                  <div className="toDo_data">
                    <span className="toDo_heading">{val.title}</span>
                    <span className="toDo_detail">{val.detail}</span>
                  </div>
                  <div className="toDo_others">
                    {
                      val.reminder == true ?
                        <span className="toDo_status">Yes</span> :
                        <span className="toDo_status">No</span>
                    }
                    <span className="toDo_dateTime"><MdDateRange /> {val.date} &nbsp;&nbsp; <MdOutlineAccessTime /> {val.time}</span>
                  </div>
                </div>
                <div className="toDo_right">
                  <span className="toDo_done">
                    <IoMdDoneAll />
                  </span>
                  <span className="toDo_delete" onClick={() => deleteData(val)}>
                    <MdDeleteForever />
                  </span>
                  <span className="toDo_edit" onClick={() => showModal({ data: val, type: types[1] })}>
                    <MdModeEdit />
                  </span>
                </div>
              </div>
            )
        }
      </div>
    </>
  )
}
export default TDLList