export const BasicConditionalValue = () => {
  return (
    <>
      <TypeOne></TypeOne>
      <TypeTwo></TypeTwo>
      <TypeThree></TypeThree>
      <TypeFour></TypeFour>
    </>
  )
}

const TypeOne = () => {
  const age = 19
  if (age >= 18) {
    return (
      <>
        <p>Type One: <b>Can Watch</b></p>
      </>
    )
  }
  return (
    <>
      <p>Type One: <b>Not Now</b></p>
    </>
  )
}
const TypeTwo = () => {
  const age = 19
  return (
    <>
      <p>Type Two: <b>{age >= 18 ? 'Can Watch' : 'Not Now'}</b></p>
    </>
  )
}
const TypeThree = () => {
  const age = 19
  let canWatch = 'Not Now'
  if (age >= 18) canWatch = 'Can Watch'
  return (
    <>
      <p>Type Three: <b>{canWatch}</b></p>
    </>
  )
}
const TypeFour = () => {
  const age = 19
  const canWatch = () => {
    if (age >= 18) return "Can Watch"
    return 'Not Now'
  }
  return (
    <>
      <p>Type Four: <b>{canWatch()}</b></p><br />
    </>
  )
}