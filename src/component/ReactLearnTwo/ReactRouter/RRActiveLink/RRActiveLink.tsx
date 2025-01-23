import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout/Layout"
import { LinkPageFive, LinkPageFour, LinkPageOne, LinkPageSeven, LinkPageSix, LinkPageThree, LinkPageTwo } from "./Component/LinkPage"

export default function RRActiveLink() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: '',
          element: <LinkPageOne />
        },
        {
          path: 'link-page-two',
          element: <LinkPageTwo />
        },
        {
          path: 'link-page-three',
          element: <LinkPageThree />
        },
        {
          path: 'link-page-four',
          element: <LinkPageFour />
        },
        {
          path: 'link-page-five',
          element: <LinkPageFive />
        },
        {
          path: 'link-page-six',
          element: <LinkPageSix />
        },
        {
          path: 'link-page-seven',
          element: <LinkPageSeven />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}