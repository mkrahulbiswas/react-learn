import { MdOutlineSearch, MdOutlineSearchOff } from "react-icons/md"
import { MoviesCart } from "./MoviesCart"
import { useContext, useEffect, useState } from "react"
import { LoaderContext } from "../../Context/LoaderContext"

export const Movies = () => {
  const [moviesData, setMoviesData] = useState<any>({
    total: 0,
    response: '',
    list: {}
  })

  const [searchKey, setSearchKey] = useState({
    key: '',
    error: '',
    type: true
  })

  const { setLoader }: any = useContext(LoaderContext)

  const getMoviesData = async (searchKey: any) => {
    setLoader(true)
    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3cc67609&s=" + searchKey + "&page=1")
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

  const handelSearch = (type: any) => {
    if (type == 1) {
      if (searchKey.key !== '') {
        setSearchKey({ ...searchKey, type: false })
        getMoviesData(searchKey.key)
      } else {
        getMoviesData('titanic')
      }
    } else {
      resetSearch()
    }
  }

  const resetSearch = () => {
    getMoviesData('titanic')
    setSearchKey({
      key: '',
      error: '',
      type: true
    })
  }

  useEffect(() => {
    getMoviesData('titanic')
  }, [setLoader])

  return (
    <div className="m_section">
      <div className="m_search">
        <div className="m_form">
          <input
            type="text"
            className="form-control"
            onKeyUpCapture={() => setSearchKey({ ...searchKey, type: true })}
            placeholder="Search..."
            value={searchKey.key}
            onChange={(e) => setSearchKey({ ...searchKey, key: e.target.value })} />
          {
            searchKey.type == true
              ? <button onClick={() => handelSearch(1)}><MdOutlineSearch /></button>
              : <button onClick={() => handelSearch(0)}><MdOutlineSearchOff /></button>
          }
        </div>
      </div>
      <div className="m_list">
        {
          moviesData.list.length > 0
            ? moviesData.list.map((val: any) => <MoviesCart value={val} key={val.imdbID} />)
            : <div>{moviesData.response}</div>
        }
      </div>
    </div>
  )
}