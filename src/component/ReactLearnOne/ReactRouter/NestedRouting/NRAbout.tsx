import { Link, Outlet } from "react-router"

function NRAbout() {
  return (
    <div>
      <section>
        <h1>This is <b>Nested Routing</b> about page</h1>
        <Link to="contact">Contact</Link>
        <Outlet />
      </section>
    </div>
  )
}

export default NRAbout
