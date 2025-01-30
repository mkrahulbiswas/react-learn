export const MoviesCart = ({ value }: any) => {
  return (
    <>
      <div className="m_items">
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