import { FaLock, FaLockOpen, FaPhone } from "react-icons/fa";
import { MdAutoDelete, MdEdit, MdEmail } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

export const List = ({ data }: any) => {
  console.log(data);

  return (
    <div className="item">
      <div className="image">
        <img src={data.image} alt="img" />
      </div>
      <div className="name">
        <span>{data.name}</span>
      </div>
      <div className="info">
        <div className="phone">
          <div className="right">
            <FaPhone />
          </div>
          <div className="left">
            <span>Phone</span>
            <span>{data.phone}</span>
          </div>
        </div>
        <div className="email">
          <div className="right">
            <MdEmail />
          </div>
          <div className="left">
            <span>email</span>
            <span>{data.email}</span>
          </div>
        </div>
        <div className="class">
          <div className="right">
            <SiGoogleclassroom />
          </div>
          <div className="left">
            <span>class</span>
            <span>{data.class}</span>
          </div>
        </div>
        <div className="action">
          <div className="edit">
            <button>
              <MdEdit />
            </button>
          </div>
          <div className="status">
            <button>
              <FaLockOpen />
              {/* <FaLock /> */}
            </button>
          </div>
          <div className="delete">
            <button>
              <MdAutoDelete />
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}