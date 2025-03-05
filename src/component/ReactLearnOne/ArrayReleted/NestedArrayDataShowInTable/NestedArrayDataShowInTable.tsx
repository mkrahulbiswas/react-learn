import style from './NestedArrayDataShowInTable.module.scss'
import Table from 'react-bootstrap/Table';

function NestedArrayDataShowInTable() {
  const studentInfo = [
    {
      name: 'Biswajit Bala',
      roll: 10,
      age: 25,
      address: [
        {
          city: 'aa',
          state: 'West Bengal',
          pin: '789654',
        },
        {
          city: 'aa',
          state: 'Gujarat',
          pin: '741258',
        },
        {
          city: 'aa',
          state: 'Maharashtra',
          pin: '745632',
        },
      ]
    },
    {
      name: 'Somnath Dey',
      roll: 20,
      age: 27,
      address: [
        {
          city: 'aa',
          state: 'West Bengal',
          pin: '753159',
        },
        {
          city: 'aa',
          state: 'Maharashtra',
          pin: '794613',
        },
      ]
    },
    {
      name: 'Priyanka Dubay',
      roll: 30,
      age: 30,
      address: [
        {
          city: 'aa',
          state: 'Maharashtra',
          pin: '753421',
        },
        {
          city: 'aa',
          state: 'West Bengal',
          pin: '786325',
        },
        {
          city: 'aa',
          state: 'Karnataka',
          pin: '756489',
        },
        {
          city: 'aa',
          state: 'West Bengal',
          pin: '781234',
        },
      ]
    },
  ]

  return (
    <div className={style.mainDiv}>
      <Table striped bordered hover size="sm" variant='success'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Roll</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            studentInfo.map((itemOne: any, indexOne: any) =>
              <tr key={indexOne}>
                <td>{indexOne + 1}</td>
                <td>{itemOne.name}</td>
                <td>{itemOne.roll}</td>
                <td>{itemOne.age}</td>
                <td>
                  <Table striped bordered hover size="sm" variant='warning'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Pin Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        itemOne.address.map((itemTwo: any, indexTwo: any) =>
                          <tr key={indexTwo}>
                            <td>{indexTwo + 1}</td>
                            <td>{itemTwo.city}</td>
                            <td>{itemTwo.state}</td>
                            <td>{itemTwo.pin}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default NestedArrayDataShowInTable
