export default function UseOfReduce() {
  let userData = [
    {
      name: 'Rahul Biswas',
      class: '10',
      age: 10
    }, {
      name: 'Arpita Biswas',
      class: '20',
      age: 20
    }, {
      name: 'Arpita Biswas',
      class: '20',
      age: 30
    }
  ]
  const totalAgeOne = userData.reduce((acc: any, state: any) => acc + state.age, 0);
  const totalAgeTwo = userData.reduce((acc: any, state: any) => {
    return acc + state.age
  }, 0);
  return (
    <>
      <p>Use Of <b>Reduce</b> to find the total age type one: </p>
      <span>{totalAgeOne}</span>
      <hr />
      <p>Use Of <b>Reduce</b> to find the total age type two: </p>
      <span>{totalAgeTwo}</span>
      <hr />
    </>
  )
}