import { useEffect } from "react"
import { useNavigate } from "react-router"

function BRPProtected(props: any) {
  const { ComponentPass } = props
  const navigate = useNavigate()
  useEffect(() => {
    let isLogin: any = localStorage.getItem('login')
    let login = JSON.parse(isLogin)
    if (!login) {
      navigate('/login')
    }
  })
  return (
    <>
      <ComponentPass />
    </>
  )
}

export default BRPProtected
