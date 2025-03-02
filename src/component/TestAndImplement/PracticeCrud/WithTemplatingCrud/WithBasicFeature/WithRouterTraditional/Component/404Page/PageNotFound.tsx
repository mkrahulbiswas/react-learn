import { Link } from "react-router"

export const PageNotFound = () => {
  return (
    <section>
      <h1>Oops No page found to <Link to='/home'>home</Link> page</h1>
    </section>
  )
}
