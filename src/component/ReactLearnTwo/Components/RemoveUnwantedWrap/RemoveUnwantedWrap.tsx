import React, { Fragment } from "react"

export const RemoveUnwantedWrap = () => {
  return (
    <>
      <p>There may way to wrap JSX HTML elements</p>
      <TypeOne />
      <TypeTwo />
      <TypeThree />
      <TypeFour />
      <TypeFive />
    </>
  )
}

export const TypeOne = () => {
  return (
    <div>
      <b>Type One: By using DIV element we can wrap but there a problem is an extra div will add with ne inner elements.</b><br />
    </div>
  )
}
export const TypeTwo = () => {
  return (
    <>
      <b>Type Two</b><br />
    </>
  )
}
export const TypeThree = () => {
  return (
    <Fragment>
      <b>Type Three</b><br />
    </Fragment>
  )
}
export const TypeFour = () => {
  return (
    <React.Fragment>
      <b>Type Four</b><br />
    </React.Fragment>
  )
}
export const TypeFive = () => {
  return ([<TypeFour key="1" />, <TypeFour key="2" />])
}