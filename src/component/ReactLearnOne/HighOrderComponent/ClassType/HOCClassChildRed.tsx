import { Component } from "react";

class HOCClassChildRed extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div style={{ borderRadius: '10px', backgroundColor: 'red', margin: '10px', padding: '10px' }}>
        <this.props.cmp />
      </div>
    )
  }
}

export default HOCClassChildRed