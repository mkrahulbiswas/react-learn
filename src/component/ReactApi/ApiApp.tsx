import './ApiApp.css'
import React, { useState } from 'react'
import SinglePageCrud from './crudOperation/SinglePageCrud/SinglePageCrud'
import { PrimeReactProvider } from 'primereact/api'
import { FidgetSpinner } from 'react-loader-spinner'
import { Bounce, toast, ToastContainer } from 'react-toastify'
function ApiApp() {
  const value: any = {
    appendTo: 'self',
    unstyled: true
  }
  const [pageLoader, setPageLoader] = useState(false)
  function initLoader(condition: any) {
    setPageLoader(condition)
  }
  function toastMgs(dataPass: any) {
    let option: any = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: true,
      theme: "dark",
      transition: Bounce,
    }
    if (dataPass.type == 'success') {
      toast.success(dataPass.msg, option);
    } else if (dataPass.type == 'warn') {
      toast.warn(dataPass.msg, option);
    } else if (dataPass.type == 'info') {
      toast.info(dataPass.msg, option);
    } else if (dataPass.type == 'error') {
      toast.error(dataPass.msg, option);
    } else {
      toast(dataPass.msg, option);
    }
  }
  return (
    <React.Fragment>
      {
        pageLoader ?
          <div className='pageLoader'>
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
            />
          </div> : null
      }
      <PrimeReactProvider value={value}>
        {/* <GetData /> */}
        {/* <UpdateData /> */}
        {/* <SaveData /> */}
        {/* <DeleteData /> */}
        <SinglePageCrud dataPass={{ loader: initLoader, toast: toastMgs }} />
      </PrimeReactProvider>
      <ToastContainer limit={3} />
    </React.Fragment>
  )
}
export default ApiApp
