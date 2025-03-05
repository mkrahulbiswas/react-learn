import { useState } from "react"

function StateWithObjectFunctional() {
  const [data, setData] = useState({ name: 'Rahul Biswas', phone: '8436191135' })
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h1>Phone: {data.phone}</h1>
      <hr />
      <input type="text" placeholder="Name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
      <input type="text" placeholder="Phone" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
    </div>
  )
}

export default StateWithObjectFunctional
