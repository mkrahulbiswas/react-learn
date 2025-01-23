import { useLocation } from "react-router"

function ULHome() {
  const location: any = useLocation()
  console.log(location)
  return (
    <div>
      <section>
        <h1>This is <b>Use Location</b>, by this you will found some information as i consoled</h1>
      </section>
    </div>
  )
}

export default ULHome
