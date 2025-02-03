export const MoviesPagination = ({ total, filter }: any) => {
  const numberOfPage = Math.floor(total / 10) + ((Math.floor(total % 10) == 0) ? 0 : 1)
  const goToAnotherPage = (page: number) => {
    filter('titanic', page)
  }
  return (
    <div className="mp_main">
      {
        Array.from(Array(numberOfPage)).map((_, i: number) => {
          return <span key={i} onClick={() => goToAnotherPage(i + 1)}>{i + 1}</span>
        })
      }
      {/* <p>{numberOfPage}</p>
      <p>{total}</p> */}
    </div>
  )
}