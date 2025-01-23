import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"

export default function RRBasicTraditional() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}