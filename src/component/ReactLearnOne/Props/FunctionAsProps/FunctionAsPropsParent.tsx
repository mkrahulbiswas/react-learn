import { useState } from "react"
import FunctionAsPropsChild from "./FunctionAsPropsChild/FunctionAsPropsChild"

function FunctionAsPropsParent() {
  const [userName, setUpdate] = useState('Not Found')
  function commonCallForChild(text: string = 'NA') {
    setUpdate(text)
  }
  return (
    <div>
      <FunctionAsPropsChild clickForAction={commonCallForChild} />
      <span>User Name Is: {userName}</span>
    </div>
  )
}

export default FunctionAsPropsParent