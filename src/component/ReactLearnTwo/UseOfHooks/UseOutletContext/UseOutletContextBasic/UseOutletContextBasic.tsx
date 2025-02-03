import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import PageOne from './Component/PageOne'
export default function UseOutletContextBasic() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: '/',
          element: <PageOne />
        },
      ]
    }
  ])
  return (
    <>
      <p>Use outlet context simple mode:</p>
      <RouterProvider router={router} />
      <hr />
    </>
  )
}