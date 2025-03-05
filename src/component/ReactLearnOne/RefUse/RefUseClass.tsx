import React, { createRef, PureComponent } from "react"

class RefUseClass extends PureComponent<any, any> {
  inputRef: React.RefObject<any>;
  constructor(props: any) {
    super(props);
    this.inputRef = createRef()
  }
  componentDidMount(): void {
    console.log(this.inputRef)
    this.inputRef.current.value = '10000'
  }
  doAction() {
    this.inputRef.current.style.color = 'red'
    this.inputRef.current.style.backgroundColor = 'green'
  }
  render(): React.ReactNode {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.doAction()}>Change Input</button>
      </div>
    )
  }
}

export default RefUseClass