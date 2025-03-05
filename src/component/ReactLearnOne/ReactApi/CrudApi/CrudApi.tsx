import './CrudApi.css'
import React, { useState } from 'react'
import { FidgetSpinner } from 'react-loader-spinner'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import SinglePageCrud from './SinglePageCrud/SinglePageCrud'
function CrudApi() {
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
      <SinglePageCrud dataPass={{ loader: initLoader, toast: toastMgs }} />
      <ToastContainer limit={3} />
    </React.Fragment>
  )
}
export default CrudApi
