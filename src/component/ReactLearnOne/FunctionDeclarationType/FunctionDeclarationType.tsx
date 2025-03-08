function FunctionDeclarationType() {
  const typeOne = () => {
    return 'Type One'
  }
  function typeTwo() {
    return 'Type Two'
  }
  return (
    <div>
      <h1>Function calling {typeOne()}</h1><br />
      <h1>Function calling {typeTwo()}</h1>
    </div>
  )
}

export default FunctionDeclarationType
