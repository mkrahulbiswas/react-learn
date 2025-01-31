import { useNavigate } from "react-router"

export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div>Home Page</div>
      <button className="btn btn-sm btn-info" onClick={() => navigate('/about')}>About Page</button>
    </>
  )
}