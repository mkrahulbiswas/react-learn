import { useNavigate } from "react-router"

export default function PageThree() {
  const navigate = useNavigate()
  return (
    <>
      <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(-1)}>Go back</button>
      <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(+1)}>Go previous</button>
      <button className="btn btn-primary btn-sm me-2" onClick={() => navigate('/')}>Go To Page One</button>
      <div>Page Three</div>
    </>
  )
}