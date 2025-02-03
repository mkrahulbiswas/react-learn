import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';
export default function UseStateBasic() {
  return (
    <React.Fragment>
      <SimpleStateType />
      <ArrayStateType />
    </React.Fragment>
  )
}

const SimpleStateType = () => {
  let counterOne = 1;
  const [counterTwo, setCounterTwo] = useState(0)
  function incCounterOne() {
    counterOne++
    console.log(counterOne)
  }
  function incCounterTwo() {
    setCounterTwo(counterTwo + 1)
  }
  return (
    <>
      <p>Use state simple mode:</p>
      <div className='useHooks'>
        <div>
          <p>Hear we use simple <b>javascript</b> variable, and which is not reflect in view after change its value.</p>
          <span>{counterOne}</span>
          <Button variant='primary' onClick={incCounterOne}>Click Me</Button>
        </div>
        <div>
          <p>Hear we use <b>react state</b> variable, and you see whenever we change the variable value it automatically update the view page.</p>
          <span>{counterTwo}</span>
          <Button variant='info' onClick={incCounterTwo}>Click Me</Button>
        </div>
      </div>
      <hr />
    </>
  );
}

const ArrayStateType = () => {
  const [arrayStateOne] = useState([
    { name: 'Anil Das', age: '30' },
    { name: 'Binod Biswas', age: '27' },
    { name: 'Badal Nath', age: '29' },
    { name: 'Sohom Talukdar', age: '28' },
  ])
  return (
    <>
      <p>Use state array mode:</p>
      <div className='useHooks'>
        <div>
          <p>Hear we are ty to put <b>array of objects</b> in state</p>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {
                arrayStateOne.map((value, key) => {
                  return (
                    <tr key={key}>
                      <td>{value.name}</td>
                      <td>{value.age}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
      </div>
      <hr />
    </>
  );
}