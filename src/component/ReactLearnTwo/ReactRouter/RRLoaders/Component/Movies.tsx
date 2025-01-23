import { useLoaderData } from "react-router"

export default function Movies() {
  const movies = useLoaderData()
  console.log(movies);

  return (
    <>
      <div>Movies Page list</div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.Search.map((val: any) => {
              return (
                <tr key={val.imdbID}>
                  <td>{val.Title}</td>
                  <td>{val.Year}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}