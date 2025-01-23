import { Component } from "react";

class HOCClassChildGreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div style={{ borderRadius: '10px', backgroundColor: 'green', margin: '10px', padding: '10px' }}>
        <this.props.cmp />
      </div>
    )
  }
}
export default HOCClassChildGreen