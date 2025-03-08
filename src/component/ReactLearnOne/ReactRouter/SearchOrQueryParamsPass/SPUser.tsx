import { useSearchParams } from "react-router"

function SPUser() {
  const [params, setParams]: any = useSearchParams()
  return (
    <div>
      <section>
        <h1>Hi, this is <b style={{ textTransform: 'uppercase' }}>{params.get('name')}</b></h1>
        <input type="number" onChange={(e) => setParams({ age: e.target.value })} />
      </section>
    </div>
  )
}

export default SPUser
