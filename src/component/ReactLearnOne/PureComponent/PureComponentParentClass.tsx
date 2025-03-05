import React, { PureComponent } from "react"
import PureComponentChildClass from "./PureComponentChildClass"

class PureComponentParentClass extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      counterOne: 0
    }
  }
  render(): React.ReactNode {
    return (
      <div>
        <div>
          <PureComponentChildClass counterOne={this.state.counterOne} />
          <button onClick={() => this.setState({ counterOne: this.state.counterOne + 1 })}>Increment Counter One</button>
        </div>
      </div>
    )
  }
}

export default PureComponentParentClass