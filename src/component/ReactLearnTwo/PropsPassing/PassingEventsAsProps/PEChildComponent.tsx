import { Button } from "react-bootstrap"

export const PEChildComponentOne = (props: any) => {
  return (
    <>
      <Button variant='primary' onClick={props.onClick}>Click Me One</Button>
    </>
  )
}
export const PEChildComponentTwo = (props: any) => {
  function callMethod() {
    props.onRahulClick()
  }
  return (
    <>
      <Button variant='info' onClick={callMethod}>Click Me Two</Button>
    </>
  )
}
export const PEChildComponentThree = (props: any) => {
  return (
    <>
      <Button variant='warning' onClick={props.onClick}>Click Me One</Button>
    </>
  )
}
export const PEChildComponentFour = (props: any) => {
  return (
    <>
      <Button variant='success' onClick={props.onClick}>Click Me One</Button>
    </>
  )
}
export const PEChildComponentFive = (props: any) => {
  return (
    <>
      <Button variant='light' onMouseEnter={props.onMouseEnter}>Click Me One</Button>
    </>
  )
}
