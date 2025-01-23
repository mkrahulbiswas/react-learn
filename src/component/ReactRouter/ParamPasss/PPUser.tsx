import { useParams } from "react-router"

function PPUser() {
  const params: any = useParams()
  return (
    <div>
      <section>
        <h1>Hi, this is <b style={{ textTransform: 'uppercase' }}>{params.name}</b></h1>
      </section>
    </div>
  )
}

export default PPUser
