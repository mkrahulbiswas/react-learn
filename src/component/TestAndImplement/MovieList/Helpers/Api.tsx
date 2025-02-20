export const getMoviesListByName = async ({ params, request }: any) => {
  try {
    console.log('params->', params);
    console.log('request->', request);

    const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3cc67609&s=titanic&page=1")
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
  }
}

export const getMoviesDetails = async ({ params }: any) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=3cc67609`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
  }
}