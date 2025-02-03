import { MoviesCart } from "./MoviesCart"
import { useContext, useEffect, useState } from "react"
import { LoaderContext } from "../../Context/LoaderContext"
import { MoviesSearch } from "./MoviesSearch"
import { MoviesPagination } from "./MoviesPagination"

export const Movies = () => {
  const [moviesData, setMoviesData] = useState<any>({
    total: 0,
    response: '',
    list: {}
  })

  const { setLoader }: any = useContext(LoaderContext)

  const getMoviesData = async (searchKey: any, page: number) => {
    setLoader(true)
    try {
      const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=3cc67609&s=" + searchKey + "&page=" + page)
      const data = await response.json()
      setLoader(false);
      if (data.Response == 'False') {
        setMoviesData({
          total: 0,
          response: data.Error,
          list: {}
        })
      } else {
        setMoviesData({
          total: data.totalResults,
          response: data.Response,
          list: data.Search
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMoviesData('titanic', 1)
  }, [setLoader])

  return (
    <div className="m_section">
      <div className="m_search">
        <MoviesSearch filter={getMoviesData} />
      </div>
      <div className="m_list">
        {
          moviesData.list.length > 0
            ? moviesData.list.map((val: any) => <MoviesCart value={val} key={val.imdbID} />)
            : <div>{moviesData.response}</div>
        }
      </div>
      <div className="m_pagination">
        <MoviesPagination total={moviesData.total} filter={getMoviesData} />
      </div>
    </div>
  )
}