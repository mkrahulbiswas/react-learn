import React, { Component } from "react"

class HOCClassNestedChild extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render(): React.ReactNode {
    return (
      <div>
        <h3 className="mb-3 text-white">{this.state.count}</h3>
        <button className="btn btn-warning btn-sm" onClick={() => this.setState({ count: this.state.count + 1 })}>Increase</button>
      </div>
    )
  }
}

export default HOCClassNestedChild