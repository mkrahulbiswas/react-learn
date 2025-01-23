import { memo, useRef } from "react"

export const ChildComponentThree = memo(() => {
  const ref = useRef(0)
  return (
    <>
      <p>This is example of USE MEMO type two</p>
      <p>Here we have used <b>use momo</b>, so whenever there is a change in the <b>parent component</b>, the <b>child component</b> where it is used is not <b>re-rendered</b>.</p>
      <span>Ref Value Is: {ref.current++}</span>
    </>
  )
})