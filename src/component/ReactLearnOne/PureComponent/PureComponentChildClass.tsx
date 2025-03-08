import React, { PureComponent } from "react";

class PureComponentChildClass extends PureComponent<any, any> {
  constructor(props: any) {
    // console.log(1)
    super(props);
    this.state = {
      counterTwo: 0
    }
  }
  render(): React.ReactNode {
    console.warn('Component is calling')
    return (
      <div>
        <h1>Counter Two: {this.state.counterTwo}</h1>
        <h1>Counter One: {this.props.counterOne}</h1>
        <hr /><br />
        <button onClick={() => this.setState({ counterTwo: 1 })}>Increment Counter Two</button>
      </div>
    )
  }


}
export default PureComponentChildClass;