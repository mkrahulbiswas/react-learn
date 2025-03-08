function EmpOne() {
  function FirstClick() {
    alert('First Click')
  }
  return (
    <div>
      <button onClick={()=>FirstClick()}>Click Me</button>
    </div>
  )
}
export default EmpOne
