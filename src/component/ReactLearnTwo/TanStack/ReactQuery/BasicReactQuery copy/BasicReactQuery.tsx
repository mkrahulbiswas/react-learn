import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Layout from "./Layout/Layout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function BasicReactQuery() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
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
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}