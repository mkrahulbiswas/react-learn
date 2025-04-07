import Swal from "sweetalert2";

export const ExampleTwo = () => {
  return (
    <>
      <SimpleAlert />
    </>
  )
}

export const SimpleAlert = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    customClass: {
      popup: 'colored-toast',
    },
  })

  const showAlert = (type: any) => {
    if (type === 'success') {
      Toast.fire({
        icon: 'success',
        title: 'Success',
      })
    } else if (type === 'error') {
      Toast.fire({
        icon: 'error',
        title: 'Error',
      })
    } else if (type === 'warning') {
      Toast.fire({
        icon: 'warning',
        title: 'Error',
      })
    } else if (type === 'info') {
      Toast.fire({
        icon: 'info',
        title: 'Error',
      })
    } else {
      Toast.fire({
        icon: 'question',
        title: 'Warning',
      })
    }
  }
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Simple various type alert</span>
        </div>
        <div className="exampleCommonContent">
          <button className="btn btn-success" onClick={() => showAlert('success')}>Success</button>
          <button className="btn btn-danger ms-3" onClick={() => showAlert('error')}>Error</button>
          <button className="btn btn-warning ms-3" onClick={() => showAlert('warning')}>Warning</button>
          <button className="btn btn-info ms-3" onClick={() => showAlert('info')}>Info</button>
          <button className="btn btn-light ms-3" onClick={() => showAlert('question')}>Question</button>
        </div>
      </div>
    </div>
  )
}