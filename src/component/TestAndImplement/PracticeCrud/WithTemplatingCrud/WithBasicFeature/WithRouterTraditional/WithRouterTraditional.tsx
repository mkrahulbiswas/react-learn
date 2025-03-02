import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Layout from "./Layout/Layout"
import './WithRouterTraditional.scss'
import StudentList from "./Component/Student/StudentList"
import { PageNotFound } from "./Component/404Page/PageNotFound"

export default function WithRouterTraditional() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="student" element={<StudentList />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}