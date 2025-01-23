import './StyleOrCssUse.css'
import style from './StyleOrCssUse.module.css'
function StyleOrCssUse() {
  let age: number = 10
  let ageClass: string = age >= 15 ? 'active' : 'inactive'
  let cssOne = {
    color: 'red',
    backgroundColor: 'gray'
  }
  let cssTwo = {
    color: `${age >= 15 ? 'red' : 'green'}`,
    backgroundColor: age >= 15 ? 'red' : 'green'
  }
  return (
    <div>
      <div className="styleType1">Style Type 1</div>
      <div style={{ color: 'red', backgroundColor: 'gray' }}>Style Type 2</div>
      <div style={cssOne}>Style Type 3</div>
      <div style={cssTwo}>Style Type 4</div>
      <div className={age >= 10 ? 'active' : 'inactive'}>Style Type 5</div>
      <div className={`styleType1 ${ageClass}`}>Style Type 6</div>
      <div className={style.styleType3}>Style Type 7</div>
      <div className={style['style-Type4']}>Style Type 8</div>
    </div>
  )
}
export default StyleOrCssUse