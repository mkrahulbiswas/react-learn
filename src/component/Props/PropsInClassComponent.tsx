import React from "react";

class PropsInClassComponent extends React.Component {
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