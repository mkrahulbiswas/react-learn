import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Layout from "./Layout/Layout"
import './WithRouterTraditional.scss'
import { PageNotFound } from "./Component/404Page/PageNotFound"
import { Student } from "./Component/Student/Student"
import { Bounce, ToastContainer } from "react-toastify"
import { BallTriangle } from "react-loader-spinner"

export default function WithRouterTraditional() {
  let option: any = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: true,
    theme: "dark",
    transition: Bounce,
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="student" element={<Student />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer limit={3} />
      <div className="loader">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  )
}