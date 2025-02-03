import React from "react";

interface Props {
  email: string;
}

class PropsInClassComponent extends React.Component<Props> {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Count: {this.props.email}</h1>
      </div>
    )
  }
}
export default PropsInClassComponent;