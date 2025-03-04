import { FaLock, FaLockOpen, FaPhone } from "react-icons/fa";
import { MdAutoDelete, MdEdit, MdEmail } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

export const List = ({ data, handelMethod }: any) => {
  console.log(data);
  console.log(handelMethod);

  return (
    <div className={data.status == '1' ? 'item active' : 'item inactive'}>
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
              {
                data.status == '1' ?
                  <FaLockOpen onClick={() => handelMethod.statusStudent(data.idOrg)} /> :
                  <FaLock onClick={() => handelMethod.statusStudent(data.idOrg)} />
              }
            </button>
          </div>
          <div className="delete">
            <button>
              <MdAutoDelete onClick={() => handelMethod.deleteStudent(data.idOrg)} />
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}