import { useState } from "react";

function SimpleTextInput() {
  const [data, setData] = useState(null)
  function getData(event: any) {
    setData(event.target.value)
  }
  return (
    <div>
      <input type="text" onChange={() => getData(event)} />
      <p>
        <div>{data}</div>
      </p>
    </div>
  )
}

export default SimpleTextInput
