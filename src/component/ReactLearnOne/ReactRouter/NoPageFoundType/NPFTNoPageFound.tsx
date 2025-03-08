import { Link } from "react-router"

function NPFTNoPageFound() {
  return (
    <div>
      <section>
        <h1>Oops No page found to <Link to='/home'>home</Link> page</h1>
      </section>
    </div>
  )
}

export default NPFTNoPageFound
