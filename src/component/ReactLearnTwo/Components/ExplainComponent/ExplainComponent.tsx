import { Fragment } from "react/jsx-runtime"

export const ExplainComponent = () => {
  return (
    <Fragment>
      <p>A component helps or provide the power of reusability of same HTML element into various place</p>
      <ReusableComponent />
      <ReusableComponent />
      <ReusableComponent />
    </Fragment>
  )
}

export const ReusableComponent = () => {
  return (
    <>
      <b>Rahul Biswas</b><br />
    </>
  )
}