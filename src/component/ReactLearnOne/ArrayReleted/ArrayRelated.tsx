function ArrayRelated() {
  const student = ['Rahul', 'Sunil', 'Arpita']
  const studentInfo = [
    { name: 'Arpita', roll: 10, age: 25 },
    { name: 'Rahul', roll: 20, age: 27 },
    { name: 'Sunil', roll: 30, age: 30 },
  ]

  // student.forEach((item: any) => {
  //   console.log('Using For Each: ', item)
  // })

  // student.map((item: any) => {
  //   console.log('Using Map: ', item)
  // })

  // for (let i: any = 0; i < student.length; i++) {
  //   console.log('Using For: ', student[i])
  // }

  //--By this you will get the key position
  // for (const key in student) {
  //   console.log('Using For: ', key)
  // }

  return (
    <div>
      {
        student.map((item: any) =>
          <span>'{item}',</span>
        )
      }
      <hr />
      {
        studentInfo.map((item: any) =>
          <p>
            <span>{item.name}</span>,
            <span>{item.roll}</span>,
            <span>{item.age}</span>,
          </p>
        )
      }
    </div>
  )
}

export default ArrayRelated
