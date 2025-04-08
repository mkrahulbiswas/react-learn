import { Bounce, toast, ToastContainer } from "react-toastify"

export const ExampleOne = () => {
  const option: any = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: true,
    theme: "colored",
    transition: Bounce,
  }
  const showAlert = (type: any) => {
    if (type === 'success') {
      toast.success('This is success tost', option);
    } else if (type === 'error') {
      toast.error('This is error tost', option);
    } else if (type === 'warning') {
      toast.warning('This is warning tost', option);
    } else {
      toast.info('This is info tost', option);
    }
  }
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonPoints">
          <span>Simple various types of tost alert</span>
        </div>
        <div className="exampleCommonContent">
          <button className="btn btn-success" onClick={() => showAlert('success')}>Success</button>
          <button className="btn btn-danger ms-3" onClick={() => showAlert('error')}>Error</button>
          <button className="btn btn-warning ms-3" onClick={() => showAlert('warning')}>Warning</button>
          <button className="btn btn-info ms-3" onClick={() => showAlert('info')}>Info</button>
        </div>
      </div>
      <ToastContainer limit={4} />
    </div>
  )
}