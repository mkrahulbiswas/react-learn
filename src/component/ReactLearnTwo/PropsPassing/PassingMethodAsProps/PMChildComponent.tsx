import { Button } from "react-bootstrap"

export const PMChildComponentOne = (props: any) => {
  return (
    <>
      <Button variant='primary' onClick={props.callingMethod}>Click Me One</Button>
    </>
  )
}
export const PMChildComponentTwo = (props: any) => {
  function callMethod() {
    props.callingMethod(10, 5)
  }
  return (
    <>
      <Button variant='info' onClick={callMethod}>Click Me Two</Button>
    </>
  )
}
export const PMChildComponentThree = (props: any) => {
  return (
    <>
      <Button variant='warning' onClick={() => props.callingMethod(10, 5)}>Click Me One</Button>
    </>
  )
}
