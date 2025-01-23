import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
export default function DerivedState() {
  return (
    <React.Fragment>
      <DerivedStateTypeOne />
    </React.Fragment>
  )
}

const DerivedStateTypeOne = () => {
  const [arrayStateOne, setArrayStateOne] = useState([
    { name: 'Anil Das', age: 30 },
    { name: 'Binod Biswas', age: 27 },
    { name: 'Badal Nath', age: 29 },
    { name: 'Sohom Talukdar', age: 28 },
  ])
  const totalUser: number = arrayStateOne.length
  const totalAge: any = arrayStateOne.reduce((acc: any, state: any) => {
    return acc + state.age
  }, 0)
  return (
    <>
      <p>Use state array mode:</p>
      <div className='useHooks'>
        <div>
          <p>Hear we are put the <b>state count</b> in a <b>variable</b> and that variable becomes a <b>derived state</b></p>
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
          <p>Total user is: {totalUser}</p>
          <p>Total age is: {totalAge}</p>
        </div>
      </div>
      <hr />
    </>
  );
}