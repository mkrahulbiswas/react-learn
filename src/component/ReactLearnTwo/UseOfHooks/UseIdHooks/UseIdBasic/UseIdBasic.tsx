import React, { useId } from 'react'
export default function UseIdBasic() {
  return (
    <React.Fragment>
      <p>Use ID simple mode:</p>
      <ExampleOne />
      <ExampleTwo />
      <ExampleThree />
    </React.Fragment>
  )
}

export function ExampleOne() {
  return (
    <>
      <p>Example of common link between of <b>label</b> and <b>input</b> element</p>
      <p>Here it can be seen that when we click on the level before the input field, the cursor automatically moves to it.
        This is usually done to use the <b>For</b> property <b>(in React htmlFor)</b> at the level.</p>
      <div className='useHooks'>
        <div>
          <label htmlFor='name' className='fw-bold'>Name:&nbsp;&nbsp;</label>
          <input id='name' type="text" />
        </div>
        <div>
          <label htmlFor='email' className='fw-bold'>Email:&nbsp;&nbsp;</label>
          <input id='email' type="text" />
        </div>
        <div>
          <label htmlFor='phone' className='fw-bold'>Phone:&nbsp;&nbsp;</label>
          <input id='phone' type="text" />
        </div>
      </div>
      <hr />
    </>
  )
}

export function ExampleTwo() {
  let name = useId()
  let email = useId()
  let phone = useId()
  return (
    <>
      <p>Example of common link between of <b>label</b> and <b>input</b> element</p>
      <p>Here, React's property <b>UseID</b> is used, which means we don't need to write any specific names in the level and ID.</p>
      <div className='useHooks'>
        <div>
          <label htmlFor={name} className='fw-bold'>Name:&nbsp;&nbsp;</label>
          <input id={name} type="text" />
        </div>
        <div>
          <label htmlFor={email} className='fw-bold'>Email:&nbsp;&nbsp;</label>
          <input id={email} type="text" />
        </div>
        <div>
          <label htmlFor={phone} className='fw-bold'>Phone:&nbsp;&nbsp;</label>
          <input id={phone} type="text" />
        </div>
      </div>
      <hr />
    </>
  )
}

export function ExampleThree() {
  let id = useId()
  return (
    <>
      <p>Example of common link between of <b>label</b> and <b>input</b> element</p>
      <p>Here is how to mention the ID in HTML using a combination of the use ID and text.</p>
      <div className='useHooks'>
        <div>
          <label htmlFor={id + 'name'} className='fw-bold'>Name:&nbsp;&nbsp;</label>
          <input id={id + 'name'} type="text" />
        </div>
        <div>
          <label htmlFor={id + 'email'} className='fw-bold'>Email:&nbsp;&nbsp;</label>
          <input id={id + 'email'} type="text" />
        </div>
        <div>
          <label htmlFor={id + 'phone'} className='fw-bold'>Phone:&nbsp;&nbsp;</label>
          <input id={id + 'phone'} type="text" />
        </div>
      </div>
      <hr />
    </>
  )
}