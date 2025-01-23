import React from "react";

class ComponentWillUnmountChildClass extends React.Component<any, any> {
  componentWillUnmount(): void {
      console.log('Component is removed')
  }
  render(): React.ReactNode {
    // console.log(3)
    return (
      <div>
        <h1>Child component</h1>
      </div>
    )
  }


}
export default ComponentWillUnmountChildClass;