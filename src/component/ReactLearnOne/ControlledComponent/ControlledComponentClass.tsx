import React, { Component } from "react"

class ControlledComponentClass extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      counterOne: 0,
      inputValue: 'Arpita Biswas',
      inputDefaultValue: 'Rahul Biswas',
    }
  }
  render(): React.ReactNode {
    return (
      <div>
        <div className="CommonOne">
          <div className="One">
            <span>It is an input field where we have set the value beforehand. Since we have set the value that why we cannot edit this type of input field in any way. In the next example, we will see how we can change the data in such an input field.</span>
            <input type="text" value="Rahul Biswas" />
          </div>
          <div className="Two">
            <span>Here you can see that we can change the input field data using the control component. In this case, we change the input field data by state.</span>
            <input type="text" value={this.state.inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })} />
          </div>
          <div className="Three">
            <span>The you can see how to set default value.</span>
            <input type="text" defaultValue={this.state.inputDefaultValue} />
          </div>
        </div>
      </div>
    )
  }
}

export default ControlledComponentClass