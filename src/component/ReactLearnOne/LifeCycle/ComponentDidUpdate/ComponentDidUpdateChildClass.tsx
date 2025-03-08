import React from "react";

class ComponentDidUpdateChildClass extends React.Component<any, any> {
  constructor(props: any) {
    // console.log(1)
    super(props);
    this.state = {
      counterTwo: 0
    }
  }
  componentDidUpdate(lastProp: any, lastState: any, snapShort: any): void {
    // this will execute on when state or props are updated
    console.log('Last or Previous Prop-> ', lastProp)
    console.log('Last or Previous State-> ', lastState)
    console.log('Snap Short-> ', snapShort)
    // console.log(2)
  }
  render(): React.ReactNode {
    // console.log(3)
    return (
      <div>
        <h1>Counter Two: {this.state.counterTwo}</h1>
        <h1>Counter One: {this.props.counterOne}</h1>
        <hr /><br />
        <button onClick={() => this.setState({ counterTwo: this.state.counterTwo + 1 })}>Increment Counter Two</button>
      </div>
    )
  }


}
export default ComponentDidUpdateChildClass;