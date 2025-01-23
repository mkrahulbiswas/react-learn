import { useRef } from "react"

function ChildComponentTwo() {
  const ref = useRef(0)
  return (
    <>
      <p>We have <b>not</b> used the <b>use memo</b> here, so if any changes are made to the <b>parent component</b>, the <b>child component</b> is also <b>re-rendered</b>.</p>
      <span>Ref Value Is: {ref.current++}</span>
    </>
  )
}
export default ChildComponentTwo