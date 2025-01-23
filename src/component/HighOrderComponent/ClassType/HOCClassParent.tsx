import HOCClassChildBlue from "./HOCClassChildBlue"
import HOCClassChildGreen from "./HOCClassChildGreen"
import HOCClassChildRed from "./HOCClassChildRed"
import HOCClassNestedChild from "./HOCClassNestedChild"
import React, { Component } from "react"


class HOCClassParent extends Component<any, any> {
  render(): React.ReactNode {
    return (
      <div>
        <h1>HOC Example</h1>
        <span>There you can see one component called inside another component</span>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <HOCClassChildRed cmp={HOCClassNestedChild} />
          <HOCClassChildGreen cmp={HOCClassNestedChild} />
          <HOCClassChildBlue cmp={HOCClassNestedChild} />
        </div>
      </div>
    )
  }
}

export default HOCClassParent