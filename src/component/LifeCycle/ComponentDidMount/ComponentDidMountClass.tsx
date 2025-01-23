import React from "react";

class ComponentDidMountClass extends React.Component<any, any> {
  constructor(props: any) {
    console.log(1)
    super(props);
    this.state = {
      nameOne: 'Rahul Biswas',
      nameTwo: 'Sunil Biswas',
    }
  }
  componentDidMount(): void {
    console.log(2)
    this.setState({ nameOne: 'Sunil Biswas' })
  }
  render(): React.ReactNode {
    console.log(3)
    return (
      <div>
        <h1>Name One: {this.state.nameOne}</h1>
        <h1>Name Two: {this.state.nameTwo}</h1>
      </div>
    )
  }


}
export default ComponentDidMountClass;