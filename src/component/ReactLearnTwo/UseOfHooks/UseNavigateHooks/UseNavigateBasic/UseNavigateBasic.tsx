import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import PageOne from './Component/PageOne'
import PageTwo from './Component/PageTwo'
import PageThree from './Component/PageThree'
export default function UseNavigateBasic() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: '/',
          element: <PageOne />
        },
        {
          path: 'page-two',
          element: <PageTwo />,
          children: [

          ]
        },
        {
          path: 'page-three',
          element: <PageThree />
        }
      ]
    }
  ])
  return (
    <>
      <p>Use navigate simple mode:</p>
      <RouterProvider router={router} />
      <hr />
    </>
  )
}