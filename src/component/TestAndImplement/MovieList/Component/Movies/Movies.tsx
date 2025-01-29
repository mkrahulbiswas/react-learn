import { MoviesCart } from "./MoviesCart"
import { useEffect, useState } from "react"

export default function Movies() {
  const [moviesData, setMoviesData] = useState([])

  const getMoviesData = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3cc67609&s=titanic&page=1")
      const data = await response.json()
      console.log(data);

      setMoviesData((prev) => [...prev, data])
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    console.log('ddd');

    getMoviesData()
  }, [])

  return (
    <div className="m_section">
      <div className="m_search">
        <form method="POST" action="/contact">
          <input type="text" className="form-control" />
          <button>Submit</button>
        </form>
      </div>
      <div className="m_list">
        {
          moviesData.Search.map((val: any) => <MoviesCart value={val} key={val.imdbID} />)
        }
      </div>
    </div>
  )
}