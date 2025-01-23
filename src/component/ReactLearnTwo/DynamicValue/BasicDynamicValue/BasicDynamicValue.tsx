export const BasicDynamicValue = () => {
  let name = 'Rahul Biswas'
  let age = 10
  let student = []
  const getClass = () => { return 10 }
  const getPhone = (lastThreeDigit: string | number) => { return '8436191' + lastThreeDigit }
  return (
    <>
      <p>In React inside HTML you can do direct operation as well as return another HTML</p><br />
      <span><b>Name: </b>{name}</span>
      <span><b>Age: </b>{age}</span>
      <hr />
      <span>Addition of  2 + 2: {2 + 2}</span><br />
      <span>age && 'aa': {student.length && 'aa'}</span>
      <hr />
      <span>Addition of  {age} + 2: {age + 2}</span>
      <hr />
      <span>Calling function: {getClass()}</span>
      <hr />
      <span>Calling function with dynamic value: {getPhone(432)}</span>
      <hr />
    </>
  )
}