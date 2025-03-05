import React from "react";

class CountingExpOne extends React.Component {
  mainData: { counter: number; };
  constructor(props: object) {
    super(props);
    this.mainData = {
      counter: 0
    }
  }
  incrementFun() {
    this.setState({ data: this.mainData.counter += 1 })
  }
  decrementFun() {
    this.setState({ data: this.mainData.counter -= 1 })
  }
  resetFun() {
    this.setState({ data: this.mainData.counter = 0 })
  }
  render(): React.ReactNode {
    return (
      <div>
        <h1>Count: {this.mainData.counter}</h1>
        <button onClick={() => this.incrementFun()}>Increment</button>
        <button onClick={() => this.decrementFun()}>Decrement</button>
        <button onClick={() => this.resetFun()}>Reset</button>
      </div>
    )
  }
}
export default CountingExpOne;