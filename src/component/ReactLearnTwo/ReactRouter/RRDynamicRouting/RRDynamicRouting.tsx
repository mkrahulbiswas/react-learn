import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Component/Home"
import Contact from "./Component/Contact"
import Layout from "./Layout/Layout"
import ErrorPage from "./Includes/ErrorPage"
import Movies from "./Component/Movies"
import { getMoviesDetails, getMoviesListByName } from "./Helpers/Api"
import MoviesDetails from "./Component/MoviesDetails"

export const RRDynamicRouting = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'movies',
          element: <Movies />,
          loader: getMoviesListByName
        },
        {
          path: 'movies/:id',
          element: <MoviesDetails />,
          loader: getMoviesDetails
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}