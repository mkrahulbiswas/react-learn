import React, { forwardRef, useId, useRef, useState } from 'react'

export default function ForwardRef() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const nameRef: any = useRef(null)
  const phoneRef: any = useRef(null)
  const handleFormSubmit = (e: any) => {
    e.preventDefault()

    setFormData({
      name: nameRef.current.value ?? '',
      phone: phoneRef.current.value ?? '',
    })
  }

  return (
    <React.Fragment>
      <div className='useHooks'>
        <div>
          <form onSubmit={handleFormSubmit}>
            <ForwardRefBeforeReactVersion19 label="Name" ref={nameRef} />
            <ForwardRefBeforeReactVersion19 label="Phone" ref={phoneRef} />
            {/* <ForwardRefAfterReactVersion19 label="Phone" ref={phoneRef} /> */}
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
    </React.Fragment>
  )
}

export const ForwardRefBeforeReactVersion19 = forwardRef<HTMLInputElement, { label: string }>((props, ref) => {
  const id = useId()
  return (
    <>
      <label className='d-block' htmlFor={id}>
        <input className='mb-2 ps-1 pe-1' type="text" ref={ref} placeholder={props.label} />
      </label>
    </>
  )
})

// export const ForwardRefAfterReactVersion19 = (props: { ref: React.LegacyRef<HTMLInputElement> | undefined; label: string | undefined }) => {
//   console.log(props);

//   const id = useId()
//   return (
//     <>
//       <label className='d-block' htmlFor={id}>
//         <input className='mb-2 ps-1 pe-1' type="text" ref={props.ref} placeholder={props.label} />
//       </label>
//     </>
//   )
// }