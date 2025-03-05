import { useEffect } from "react"
import { useNavigate } from "react-router"

function PRLogin() {
  const navigate = useNavigate()
  const login = () => {
    localStorage.setItem('login', JSON.stringify(true))
    navigate('/home')
  }
  useEffect(() => {
    let isLogin: any = localStorage.getItem('login')
    let login = JSON.parse(isLogin)
    if (login) {
      navigate('/home')
    }
  })
  return (
    <div>
      <section>
        <h1>This is <b>Protected Route</b> login page</h1>
        <button onClick={login}>Login</button>
      </section>
    </div>
  )
}

export default PRLogin
