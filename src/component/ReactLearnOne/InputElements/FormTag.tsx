import { useState } from "react";

function FormTag() {
  const [name, setName] = useState('')
  const [tc, setTc] = useState(false)
  const [interest, setInterest] = useState('')
  function getFormData(event: any) {
    console.log(name, tc, interest)
    event.preventDefault()
  }
  return (
    <div>
      <form onSubmit={getFormData}>
        <input type="text" onChange={(e: any) => setName(e.target.value)} /><br /><br />
        <select onChange={(e: any) => setInterest(e.target.value)}>
          <option>Select Option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e: any) => setTc(e.target.checked)} /> <span>Accept TC</span><br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormTag
