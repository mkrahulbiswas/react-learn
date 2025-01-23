import React, { useReducer } from 'react'
export default function UseReducerAdvance() {
  return (
    <React.Fragment>
      <p>Use Reducer advance mode:</p>
      <p><b>NOTE:</b> Use Reducer is same like <b>Use State</b> but both use case is different application. <b>Use Reducer</b> have a ability to operate conditional state and mostly its used in large scale calculation.</p>
      <ExampleTypeOne />
    </React.Fragment>
  )
}

const ExampleTypeOne = () => {
  const reducer = (state: any, action: any) => {
    if (action.type == 'form') {
      if (action.value.target.name == 'name') {
        return { ...state, ...state.form.name = action.value.target.value }
      }
      if (action.value.target.name == 'email') {
        return { ...state, ...state.form.email = action.value.target.value }
      }
      if (action.value.target.name == 'phone') {
        return { ...state, ...state.form.phone = action.value.target.value }
      }
    } else {
      return { ...state, count: action.value }
    }
  }
  const dataCollectionInit = {
    count: 0,
    form: {
      name: '',
      phone: '',
      email: '',
    }
  }
  const [dataCollection, dataCollectionDispatch] = useReducer(reducer, { ...dataCollectionInit })
  const handelForm = (e: any) => {
    e.preventDefault()
  }
  return (
    <>
      <div className='useHooks'>
        <div>
          <form onSubmit={(e) => handelForm(e)}>
            <input type="text" className='form-control' name='name' placeholder='Name' value={dataCollection.form.name} onChange={(e) => dataCollectionDispatch({ type: 'form', value: e })} /> <br />
            <input type="text" className='form-control' name='email' placeholder='Email' value={dataCollection.form.email} onChange={(e) => dataCollectionDispatch({ type: 'form', value: e })} /> <br />
            <input type="text" className='form-control' name='phone' placeholder='Phone' value={dataCollection.form.phone} onChange={(e) => dataCollectionDispatch({ type: 'form', value: e })} /> <br />
            <button className='btn btn-primary'>Submit</button>
            <button className='btn btn-success ms-2' onClick={() => dataCollectionDispatch({ type: 'counter', value: dataCollection.count + 1 })}>Increment</button>
            <button className='btn btn-danger ms-2' onClick={() => dataCollectionDispatch({ type: 'counter', value: dataCollection.count - 1 })}>Decrement</button>
          </form>
        </div >
        <div>
          <span><b>Name:</b> {dataCollection.form.name}</span><br />
          <span><b>Email:</b> {dataCollection.form.email}</span><br />
          <span><b>Phone:</b> {dataCollection.form.phone}</span>
          <hr />
          <span><b>Counter:</b> {dataCollection.count}</span>
        </div>
      </div >
      <hr />
    </>
  );
}