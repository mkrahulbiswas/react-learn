import { useLoaderData } from "react-router"

export default function MoviesDetails() {
  const moviesDetails = useLoaderData()
  console.log(moviesDetails);

  return (
    <div className="m_detail">
      <div className="md_main">
        <div className="md_image">
          <img src={moviesDetails.Poster} alt="" />
        </div>
        <div className="md_detail">
          <div className="md_common">
            <span>Title</span>
            <span>{moviesDetails.Title}</span>
          </div>
          <div className="md_common">
            <span>Year</span>
            <span>{moviesDetails.Year}</span>
          </div>
          <div className="md_common">
            <span>Rated</span>
            <span>{moviesDetails.Rated}</span>
          </div>
          <div className="md_common">
            <span>Released</span>
            <span>{moviesDetails.Released}</span>
          </div>
          <div className="md_common">
            <span>Runtime</span>
            <span>{moviesDetails.Runtime}</span>
          </div>
          <div className="md_common">
            <span>Genre</span>
            <span>{moviesDetails.Genre}</span>
          </div>
          <div className="md_common">
            <span>Director</span>
            <span>{moviesDetails.Director}</span>
          </div>
          <div className="md_common">
            <span>Writer</span>
            <span>{moviesDetails.Writer}</span>
          </div>
          <div className="md_common">
            <span>Actors</span>
            <span>{moviesDetails.Actors}</span>
          </div>
          <div className="md_common">
            <span>Plot</span>
            <span>{moviesDetails.Plot}</span>
          </div>
          <div className="md_common">
            <span>Language</span>
            <span>{moviesDetails.Language}</span>
          </div>
          <div className="md_common">
            <span>Country</span>
            <span>{moviesDetails.Country}</span>
          </div>
          <div className="md_common">
            <span>Awards</span>
            <span>{moviesDetails.Awards}</span>
          </div>
          <div className="md_common">
            <span>Metascore</span>
            <span>{moviesDetails.Metascore}</span>
          </div>
          <div className="md_common">
            <span>imdbVotes</span>
            <span>{moviesDetails.imdbVotes}</span>
          </div>
          <div className="md_common">
            <span>Type</span>
            <span>{moviesDetails.Type}</span>
          </div>
          <div className="md_common">
            <span>DVD</span>
            <span>{moviesDetails.DVD}</span>
          </div>
          <div className="md_common">
            <span>BoxOffice</span>
            <span>{moviesDetails.BoxOffice}</span>
          </div>
          <div className="md_common">
            <span>Production</span>
            <span>{moviesDetails.Production}</span>
          </div>
          <div className="md_common">
            <span>Website</span>
            <span>{moviesDetails.Website}</span>
          </div>
          <div className="md_common">
            <span>Response</span>
            <span>{moviesDetails.Response}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// "Ratings": [
//     {
//         "Source": "Internet Movie Database",
//         "Value": "7.9/10"
//     },
//     {
//         "Source": "Rotten Tomatoes",
//         "Value": "88%"
//     },
//     {
//         "Source": "Metacritic",
//         "Value": "75/100"
//     }
// ],