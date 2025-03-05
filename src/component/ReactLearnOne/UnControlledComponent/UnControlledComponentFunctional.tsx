import { useRef } from "react"

function UnControlledComponentFunctional() {
  let emailRef: any = useRef()
  function getFormData(e: any) {
    e.preventDefault()
    console.log('Name:- ', e.target.name.value)
    console.log('Email:- ', emailRef.current.value)

    let phone: any = document.getElementById('phone')
    console.log('Phone:- ', phone.value)
  }
  return (
    <div>
      <form action="" onSubmit={getFormData}>
        <div className="CommonOne">
          <div className="One">
            <span>Name F:</span>
            <input type="text" name="name" />
          </div>
          <div className="Two">
            <span>Email:</span>
            <input type="text" ref={emailRef} name="email" />
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

export default UnControlledComponentFunctional