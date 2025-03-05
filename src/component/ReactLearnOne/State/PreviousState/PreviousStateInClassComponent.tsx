import React from "react";

class PreviousStateInClassComponent extends React.Component {
  mainData: { previous: any; current: any; };
  constructor(props: object) {
    super(props);
    this.mainData = {
      previous: 0,
      current: 0
    }
  }
  FirstClick() {
    console.log('Function Called:---')

    // this.setState({
    //   data: this.mainData.current = (prev: any) => {
    //     console.log(prev)
    //     this.setState({ data: this.mainData.previous = prev })
    //     return Math.floor(Math.random() * 10)
    //   }
    // });
  }
  render(): React.ReactNode {
    return (
      <div>
        <h1>Previous: {this.mainData.previous}</h1>
        <h1>Current: {this.mainData.current}</h1>
        <button onClick={() => this.FirstClick()}>Click Me</button>
      </div>
    )
  }
}
export default PreviousStateInClassComponent;