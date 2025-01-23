import React from "react";

class StateWithObjectClass extends React.Component {
  mainData: { counter: number; };
  constructor(props: object) {
    super(props);
    this.mainData = {
      counter: 0
    }
  }
  FirstClick() {
    this.setState({ data: this.mainData.counter += 1 })
  }
  render(): React.ReactNode {
    return (
      <div>
        <h1>Count: {this.mainData.counter}</h1>
        <button onClick={() => this.FirstClick()}>Click Me</button>
      </div>
    )
  }
}
export default StateWithObjectClass;