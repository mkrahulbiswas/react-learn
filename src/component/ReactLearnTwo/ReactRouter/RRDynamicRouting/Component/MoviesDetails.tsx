import { useLoaderData } from "react-router"

export default function MoviesDetails() {
  const moviesDetails = useLoaderData()
  return (
    <>
      <div>Movies Details Page</div>
      <p><b>Title:</b> {moviesDetails.Title}</p>
      <p><b>Country:</b> {moviesDetails.Country}</p>
      <p><b>BoxOffice:</b> {moviesDetails.BoxOffice}</p>
      <p><b>Awards:</b> {moviesDetails.Awards}</p>
      <p><b>Actors:</b> {moviesDetails.Actors}</p>
    </>
  )
}