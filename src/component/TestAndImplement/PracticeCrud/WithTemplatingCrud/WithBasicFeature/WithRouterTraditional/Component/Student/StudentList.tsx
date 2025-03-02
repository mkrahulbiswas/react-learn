import { MdAutoDelete, MdEdit } from "react-icons/md";

export default function StudentList() {
  return (
    <>
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
            <div className="item">
              <div className="name">
                <span>Rahul Biswas</span>
              </div>
              <div className="phone">
                <span>8436191135</span>
              </div>
              <div className="email">
                <span>biswas.rahul31@gmail.com</span>
              </div>
              <div className="class">
                <span>5</span>
              </div>
              <div className="action">
                <button className="btn btn-sm btn-primary">
                  <MdEdit />
                </button>
                <button className="btn btn-sm btn-danger">
                  <MdAutoDelete />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          pagination
        </div>
      </section>
    </>
  )
}