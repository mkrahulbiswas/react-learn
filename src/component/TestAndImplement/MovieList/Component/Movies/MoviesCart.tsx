import { useNavigate } from "react-router"

export const MoviesCart = ({ value }: any) => {
  const navigate = useNavigate()
  const movieDetail = (value: any) => {
    navigate('detail/' + value.imdbID)
  }
  return (
    <>
      <div className="m_items" onClick={() => movieDetail(value)}>
        <div className="m_background" style={{ backgroundImage: 'url(' + value.Poster + ')' }}></div>
        <div className="m_poster">
          <img src={value.Poster} alt="" />
        </div>
        <div className="m_name">
          <span>{value.Title}</span>
        </div>
      </div>
    </>
  )
}