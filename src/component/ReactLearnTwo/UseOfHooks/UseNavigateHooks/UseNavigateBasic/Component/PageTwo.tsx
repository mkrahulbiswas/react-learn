import { useNavigate } from "react-router"

export default function PageTwo() {
  const navigate = useNavigate()
  return (
    <>
      <div>Page Two</div>
      <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(-1)}>Go back</button>
      <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(+1)}>Go previous</button>
      <button className="btn btn-primary btn-sm me-2" onClick={() => navigate('/page-three')}>Go To Page Three</button>
    </>
  )
}