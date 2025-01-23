import { useState } from "react"

export default function PDExampleOne() {
  const [name, setName] = useState('')
  const handelForm = (e: any) => {
    e.preventDefault()
    setName(e.target.name.value)
  }
  return (
    <>
      <div className="row bg-light p-3">
        <div className="col-3 p-2 d-flex justify-content-center" style={{ backgroundColor: '#ffdfe4' }}>
          <div className="row align-self-center">
            <form onSubmit={(e) => handelForm(e)}>
              <div className="col-12">
                <input type="text" className="form-control" name="name" placeholder="Your Name ?" />
              </div>
              <div className="col-12 d-flex justify-content-center mt-3">
                <button className="btn btn-success align-self-end">Set Name</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-6 p-2 ms-3" style={{ backgroundColor: '#ffdfe4' }}>
          <span>Main Component<b>{name}</b></span>
          <ParentComponent name={name} />
        </div>
      </div>
    </>
  )
}


const ParentComponent = (props: any) => {
  return (
    <>
      <br />
      <span>Parent Component: <b>{props.name}</b></span>
      <ChildComponent name={props.name} />
    </>
  )
}

const ChildComponent = (props: any) => {
  return (
    <>
      <br />
      <span>Child Component: <b>{props.name}</b></span>
      <GrandChildComponent name={props.name} />
    </>
  )
}

const GrandChildComponent = (props: any) => {
  return (
    <>
      <br />
      <span>Grand Child Component: <b>{props.name}</b></span>
      <GrandGrandChildComponent name={props.name} />
    </>
  )
}

const GrandGrandChildComponent = (props: any) => {
  return (
    <>
      <br />
      <span>Grand Grand Child Component: <b>{props.name}</b></span>
    </>
  )
}