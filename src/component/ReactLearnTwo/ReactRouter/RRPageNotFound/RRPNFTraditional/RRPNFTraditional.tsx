import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Layout from "./Layout/Layout"
import ErrorPage from "./Includes/ErrorPage"

export default function RRPNFTraditional() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}