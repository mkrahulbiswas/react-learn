import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Component/Home"
import './MovieList.scss'
import Contact from "./Component/Contact"
import ErrorPage from "./Includes/ErrorPage"
import { getMoviesDetails } from "./Helpers/Api"
import MoviesDetails from "./Component/Movies/MoviesDetails"
import { contactForm } from "./Helpers/Form"
import { LoaderContextProvider } from "./Context/LoaderContext"
import { Movies } from "./Component/Movies/Movies"
import { Layout } from "./Layout/Layout"

export const MovieList = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoaderContextProvider>
        <Layout />
      </LoaderContextProvider>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/',
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