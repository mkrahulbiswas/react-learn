import { useEffect, useRef } from "react"

function FPCPropsChild(props: any) {
  const previous = useRef()
  useEffect(() => {
    previous.current = props.dataPass
  })
  return (
    <div>
      <span>Current: {props.dataPass}</span><br />
      <span>Previous: {previous.current}</span><br />
    </div>
  )
}

export default FPCPropsChild