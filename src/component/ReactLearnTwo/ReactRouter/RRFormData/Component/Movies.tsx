import { useLoaderData, useNavigate } from "react-router"

export default function Movies() {
  const movies = useLoaderData()
  const navigate = useNavigate()
  const detailPage = (data: any) => {
    navigate('/movies/' + data.imdbID)
  }
  return (
    <>
      <div>Movies Page list</div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>details</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.Search.map((val: any) => {
              return (
                <tr key={val.imdbID}>
                  <td>{val.Title}</td>
                  <td>{val.Year}</td>
                  <td>
                    <button onClick={() => detailPage(val)}>View</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}