import React from "react"
import ComponentWillUnmountChildClass from "./ComponentWillUnmountChildClass"

class ComponentWillUnmountParentClass extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isDisplay: true
    }
  }
  render(): React.ReactNode {
    return (
      <div>
        {
          this.state.isDisplay ? <ComponentWillUnmountChildClass /> : <h1>Child component id removed</h1>
        }
        <button onClick={() => this.setState({ isDisplay: !this.state.isDisplay })}>Increment Counter One</button>
      </div>
    )
  }
}

export default ComponentWillUnmountParentClass