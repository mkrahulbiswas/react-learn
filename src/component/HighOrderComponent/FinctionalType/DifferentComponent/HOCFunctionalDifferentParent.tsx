import HOCFunctionalDifferentChildBlue from "./HOCFunctionalDifferentChildBlue"
import HOCFunctionalDifferentChildGreen from "./HOCFunctionalDifferentChildGreen"
import HOCFunctionalDifferentChildRed from "./HOCFunctionalDifferentChildRed"
import HOCFunctionalDifferentNestedChild from "./HOCFunctionalDifferentNestedChild"

function HOCFunctionalDifferentParent() {
  return (
    <div>
      <h1>HOC Example</h1>
      <span>There you can see one component called inside another component</span>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <HOCFunctionalDifferentChildRed cmp={HOCFunctionalDifferentNestedChild} />
        <HOCFunctionalDifferentChildGreen cmp={HOCFunctionalDifferentNestedChild} />
        <HOCFunctionalDifferentChildBlue cmp={HOCFunctionalDifferentNestedChild} />
      </div>
    </div>
  )
}

export default HOCFunctionalDifferentParent