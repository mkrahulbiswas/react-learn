import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"

export default function RRBasicRecommended() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Home, // Both type is applicable
    },
    {
      path: 'about',
      element: <About />, // Both type is applicable
    },
    {
      path: 'contact',
      element: <Contact />
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}