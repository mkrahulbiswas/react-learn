import React from "react";

class RenderLifeCycleClass extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: this.props.name,
    }
  }
  render(): React.ReactNode {
    return (
      <div>
        <h1>State: {this.state.name}</h1>
        <h1>Props: {this.props.name}</h1>
        <button onClick={() => this.setState({ name: 'Sunil Biswas' })}>Change State Value</button>
      </div>
    )
  }


}
export default RenderLifeCycleClass;