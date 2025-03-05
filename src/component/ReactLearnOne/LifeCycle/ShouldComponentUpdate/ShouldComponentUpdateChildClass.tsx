import React from "react";

class ShouldComponentUpdateChildClass extends React.Component<any, any> {
  constructor(props: any) {
    // console.log(1)
    super(props);
    this.state = {
      counterTwo: 0
    }
  }
  // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
  // console.log(2)
  // }
  shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    // this will execute on when you return true

    // console.log(4)
    console.log('Next Prop-> ', nextProps)
    console.log('Next State-> ', nextState)
    console.log('Next Context-> ', nextContext)

    if (this.state.counterTwo >= 5 && this.state.counterTwo <= 10) {
      return true
    } else {
      return false
    }
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
export default ShouldComponentUpdateChildClass;