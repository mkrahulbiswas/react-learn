import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Home from "./Component/Home"
import './MovieList.scss'
import Contact from "./Component/Contact"
import Layout from "./Layout/Layout"
import ErrorPage from "./Includes/ErrorPage"
import Movies from "./Component/Movies/Movies"
import { getMoviesDetails } from "./Helpers/Api"
import MoviesDetails from "./Component/Movies/MoviesDetails"
import { contactForm } from "./Helpers/Form"
import { LoaderContextProvider } from "./Context/LoaderContext"

export const MovieList = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoaderContextProvider><Layout /></LoaderContextProvider>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/',
          element: <Outlet />,
          children: [
            {
              path: 'movies',
              element: <Movies />,
            },
            {
              path: 'movies/detail/:id',
              element: <MoviesDetails />,
              loader: getMoviesDetails
            },
          ]
        },
        // {
        //   path: 'details/:id',
        //   element: <MoviesDetails />,
        //   loader: getMoviesDetails
        // },
        {
          path: 'contact',
          Component: Contact,
          action: contactForm
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}