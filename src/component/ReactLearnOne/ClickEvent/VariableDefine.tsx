function VariableDefine() {
  let name = 'Rahul Biswas'
  function FirstClick() {
    name = 'Arpita'
    alert(name)
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => FirstClick()}>Click Me</button>
    </div>
  )
}

export default VariableDefine
