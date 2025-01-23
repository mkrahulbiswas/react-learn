import React, { useRef, useState } from 'react'
export default function UseRefBasic() {
  return (
    <React.Fragment>
      <p>Use ref simple mode:</p>
      <ExampleOne />
      <ExampleTwo />
      <ExampleThree />
    </React.Fragment>
  )
}

export function ExampleOne() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    let name: any = document.getElementById('name')
    let phone: any = document.getElementById('phone')
    setFormData({
      name: name.value ?? '',
      phone: phone.value ?? '',
    })
  }
  return (
    <>
      <p>Without use ref example one:</p>
      <div className='useHooks'>
        <div>
          <form onSubmit={handleFormSubmit}>
            <label className='d-block'>
              <input className='mb-2 ps-1 pe-1' type="text" id='name' placeholder='Name' />
            </label>
            <label className='d-block'>
              <input className='mb-2 ps-1 pe-1' type="number" id='phone' placeholder='Phone' />
            </label>
            <label className='d-block text-right'>
              <button className='btn btn-sm btn-primary'>Submit</button>
            </label>
          </form>
          {
            formData.name && formData.phone ?
              <div className='mt-3'>
                <span className='d-block me-0 mb-1'><b>Name:</b> {formData.name}</span>
                <span className='d-block me-0'><b>Phone:</b> {formData.phone}</span>
              </div>
              : null
          }
        </div>
      </div>
      <hr />
    </>
  )
}

export function ExampleTwo() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    setFormData({
      name: e.target.name.value ?? '',
      phone: e.target.phone.value ?? '',
    })
  }
  return (
    <>
      <p>Without use ref example two:</p>
      <div className='useHooks'>
        <div>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <label className='d-block'>
              <input className='mb-2 ps-1 pe-1' type="text" name='name' placeholder='Name' />
            </label>
            <label className='d-block'>
              <input className='mb-2 ps-1 pe-1' type="number" name='phone' placeholder='Phone' />
            </label>
            <label className='d-block text-right'>
              <button className='btn btn-sm btn-primary'>Submit</button>
            </label>
          </form>
          {
            formData.name && formData.phone ?
              <div className='mt-3'>
                <span className='d-block me-0 mb-1'><b>Name:</b> {formData.name}</span>
                <span className='d-block me-0'><b>Phone:</b> {formData.phone}</span>
              </div>
              : null
          }
        </div>
      </div>
      <hr />
    </>
  )
}

export function ExampleThree() {
  const nameRef: any = useRef(null)
  const phoneRef: any = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    setFormData({
      name: nameRef.current.value ?? '',
      phone: phoneRef.current.value ?? '',
    })
  }
  return (
    <>
      <p>With use ref example three:</p>
      <div className='useHooks'>
        <div>
          <form onSubmit={handleFormSubmit}>
            <label className='d-block'>
              <input className='mb-2 ps-1 pe-1' type="text" ref={nameRef} placeholder='Name' />
            </label>
            <label className='d-block'>
              <input className='mb-2 ps-1 pe-1' type="number" ref={phoneRef} placeholder='Phone' />
            </label>
            <label className='d-block text-right'>
              <button className='btn btn-sm btn-primary'>Submit</button>
            </label>
          </form>
          {
            formData.name && formData.phone ?
              <div className='mt-3'>
                <span className='d-block me-0 mb-1'><b>Name:</b> {formData.name}</span>
                <span className='d-block me-0'><b>Phone:</b> {formData.phone}</span>
              </div>
              : null
          }
        </div>
      </div>
      <hr />
    </>
  )
}