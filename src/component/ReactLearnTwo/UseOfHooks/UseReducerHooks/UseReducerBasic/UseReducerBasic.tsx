import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap';
export default function UseReducerBasic() {
  return (
    <React.Fragment>
      <p>Use Reducer simple mode:</p>
      <p><b>NOTE:</b> Use Reducer is same like <b>Use State</b> but both use case is different application. <b>Use Reducer</b> have a ability to operate conditional state and mostly its used in large scale calculation.</p>
      <SimpleType />
      <ModifiedType />
    </React.Fragment>
  )
}

const SimpleType = () => {
  const reducer = (state: any, action: any) => {
    if (action.type === 'inc') {
      return state + 1
    } else {
      return state - 1
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <>
      <div className='useHooks'>
        <div>
          <span>{count}</span>
          <Button variant='primary' onClick={() => dispatch({ type: 'inc' })}>Increment</Button>
          <Button variant='danger' onClick={() => dispatch({ type: 'dec' })}>Decrement</Button>
        </div>
      </div>
      <hr />
    </>
  );
}

const ModifiedType = () => {
  const biswas = (state: any, action: any) => {
    if (action.type === 'inc') {
      return state + 1
    } else {
      return state - 1
    }
  }
  const [count, rahul] = useReducer(biswas, 0)
  return (
    <>
      <p><b>NOTE:</b> There no rule that in reducer the key name <b>dispatch</b> and <b>reducer</b> is alloys same, you can change this name as you want.</p>
      <div className='useHooks'>
        <div>
          <span>{count}</span>
          <Button variant='primary' onClick={() => rahul({ type: 'inc' })}>Increment</Button>
          <Button variant='danger' onClick={() => rahul({ type: 'dec' })}>Decrement</Button>
        </div>
      </div>
      <hr />
    </>
  );
}