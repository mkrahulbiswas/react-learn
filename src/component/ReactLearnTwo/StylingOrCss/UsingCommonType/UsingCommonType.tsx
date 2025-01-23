import './UsingCommonType.css'
function UsingCommonType() {
  let age: number = 12
  let ageClass: string = age >= 15 ? 'active' : 'inactive'
  let cssOne = {
    color: 'red',
    backgroundColor: 'rgb(250, 137, 137)'
  }
  let cssTwo = {
    color: `${age >= 15 ? 'blue' : 'maroon'}`,
    backgroundColor: age >= 15 ? 'rgb(144, 144, 245)' : 'rgb(241, 120, 120)'
  }
  return (
    <>
      <p>Using normal styling:</p>
      <div className="StylingOrCssMain">
        <div className="styleTypeOne">
          <span>Style Type One</span>
        </div>
        <div style={{ color: 'green', backgroundColor: 'lightgreen' }}>
          <span>Style Type Two</span>
        </div>
        <div style={cssOne}>
          <span>Style Type Three</span>
        </div>
        <div style={cssTwo}>
          <span>Style Type Four</span>
        </div>
        <div className={age >= 15 ? 'active' : 'inactive'}>
          <span>Style Type Five</span>
        </div>
        <div className={`styleTypeTwo ${ageClass}`}>
          <span>Style Type Six</span>
        </div>
      </div>
      <hr />
    </>
  )
}
export default UsingCommonType