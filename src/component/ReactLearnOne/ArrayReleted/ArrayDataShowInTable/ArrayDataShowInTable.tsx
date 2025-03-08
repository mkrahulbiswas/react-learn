import Table from 'react-bootstrap/Table';

function ArrayDataShowInTable() {
  const studentInfo = [
    { name: 'Arpita', roll: 10, age: 25 },
    { name: 'Rahul', roll: 20, age: 27 },
    { name: 'Sunil', roll: 30, age: 30 },
  ]

  return (
    <div>
      <Table striped bordered hover size="sm" variant='success'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Roll</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            studentInfo.map((item: any, index: any) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.roll}</td>
                <td>{item.age}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default ArrayDataShowInTable
