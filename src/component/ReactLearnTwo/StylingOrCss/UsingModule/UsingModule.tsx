import style from './UsingModule.module.css'
function UsingModule() {
  let age: number = 15
  const styleCondition: any = age >= 20 ? style['style-type-condition-three'] : style.styleTypeConditionFour
  return (
    <>
      <p>Using style module:</p>
      <div className="StylingOrCssMain">
        <div className={style.styleTypeOne}>
          <span>Style type One</span>
        </div>
        <div className={style['style-type-two']}>
          <span>Style Type Two</span>
        </div>
        <div className={age >= 20 ? style['style-type-condition-one'] : style.styleTypeConditionTwo}>
          <span>Style Type Three</span>
        </div>
        <div className={styleCondition}>
          <span>Style Type Four</span>
        </div>
      </div>
      <hr />
    </>
  )
}
export default UsingModule