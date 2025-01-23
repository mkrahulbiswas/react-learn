import { useNavigate } from "react-router"

export default function Contact() {
  const navigate = useNavigate()
  return (
    <>
      <div>Contact Page</div>
      <button className="btn btn-sm btn-info" onClick={() => navigate('/')}>Home Page</button>
    </>
  )
}