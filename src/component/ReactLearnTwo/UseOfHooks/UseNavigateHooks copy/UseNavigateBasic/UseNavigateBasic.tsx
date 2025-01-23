import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import ErrorPage from './Includes/ErrorPage'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
export default function UseNavigateBasic() {
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
    <>
      <p>Use navigate simple mode:</p>
      <RouterProvider router={router} />
    </>
  )
}