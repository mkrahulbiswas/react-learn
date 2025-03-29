import Swal from "sweetalert2";

export const ExampleOne = () => {
  return (
    <>
      <SimpleAlert />
      <ConfirmationAlert />
    </>
  )
}

export const SimpleAlert = () => {
  const showAlert = (type: any) => {
    if (type === 'success') {
      Swal.fire({
        title: 'Example',
        text: 'Swal injected',
        icon: 'success',
      })
    } else if (type === 'error') {
      Swal.fire({
        title: 'Example',
        text: 'Swal injected',
        icon: 'error',
      })
    } else if (type === 'warning') {
      Swal.fire({
        title: 'Example',
        text: 'Swal injected',
        icon: 'warning',
      })
    } else if (type === 'info') {
      Swal.fire({
        title: 'Example',
        text: 'Swal injected',
        icon: 'info',
      })
    } else {
      Swal.fire({
        title: 'Example',
        text: 'Swal injected',
        icon: 'question',
      })
    }
  }
  return (
    <>
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
    </>
  )
}

export const ConfirmationAlert = () => {
  const showAlert = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Confirmation various type alert</span>
        </div>
        <div className="exampleCommonContent">
          <button className="btn btn-success" onClick={() => showAlert()}>Open</button>
        </div>
      </div>
    </>
  )
}