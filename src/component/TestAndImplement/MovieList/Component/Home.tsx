import { useContext, useEffect } from "react"
import { useNavigate, useOutletContext } from "react-router"
import { LoaderContext } from "../Context/LoaderContext"

export default function Home() {
  const navigate = useNavigate()
  const { setLoader }: any = useContext(LoaderContext)
  const { setNewLoader }: any = useOutletContext()

  const interval = setTimeout(() => {
    setLoader(false)
    setNewLoader(0)
  }, 1000)
  useEffect(() => {
    setLoader(true)
    setNewLoader(1)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div>Home Page</div>
      <button className="btn btn-sm btn-info" onClick={() => navigate('/about')}>About Page</button>
    </>
  )
}