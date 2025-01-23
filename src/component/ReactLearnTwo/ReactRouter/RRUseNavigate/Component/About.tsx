import { useNavigate } from "react-router"

export default function About() {
  const navigate = useNavigate()
  return (
    <>
      <div>About Page</div>
      <button className="btn btn-sm btn-info" onClick={() => navigate(-1)}>Back</button>
    </>
  )
}