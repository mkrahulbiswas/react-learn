import { useNavigate } from "react-router";

export default function PageOne() {
  const navigate = useNavigate()
  return (
    <>
      <div>Page One</div>
      <button className="btn btn-primary btn-sm me-2" onClick={() => navigate('page-two')}>Go To Page Two</button>
      <button className="btn btn-primary btn-sm me-2" onClick={() => navigate('page-three')}>Go To Page Three</button>
    </>
  )
}