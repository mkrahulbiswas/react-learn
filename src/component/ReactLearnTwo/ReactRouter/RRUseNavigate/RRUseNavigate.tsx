import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Layout from "./Layout/Layout"
import ErrorPage from "./Includes/ErrorPage"

export const RRUseNavigate = () => {
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
          path: 'about',
          element: <About />
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