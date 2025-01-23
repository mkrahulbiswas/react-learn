import React, { Component, createRef } from "react"

class UnControlledComponentClass extends Component<any, any> {

  emailRef: any = createRef()

  getFormData(e: any) {
    e.preventDefault()
    console.log('Name:- ', e.target.name.value)
    console.log('Email:- ', this.emailRef.current.value)

    let phone: any = document.getElementById('phone')
    console.log('Phone:- ', phone.value)
  }
  render(): React.ReactNode {
    return (
      <div>
        <form action="" onSubmit={this.getFormData.bind(this)}>
          <div className="CommonOne">
            <div className="One">
              <span>Name:</span>
              <input type="text" name="name" />
            </div>
            <div className="Two">
              <span>Email:</span>
              <input type="text" ref={this.emailRef} name="email" />
            </div>
            <div className="Three">
              <span>Phone:</span>
              <input type="text" id="phone" />
            </div>
            <div className="Four">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default UnControlledComponentClass