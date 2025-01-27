import { useLoaderData, useNavigate } from "react-router"
import { MoviesCart } from "./MoviesCart"

export default function Movies() {
  const movies = useLoaderData()
  const navigate = useNavigate()
  const detailPage = (data: any) => {
    navigate('/movies/' + data.imdbID)
  }
  return (
    <div className="m_section">
      <div className="m_search">
        <input type="text" className="form-control" />
      </div>
      <div className="m_list">
        {
          movies.Search.map((val: any) => <MoviesCart value={val} />)
        }
      </div>
    </div>
  )
}