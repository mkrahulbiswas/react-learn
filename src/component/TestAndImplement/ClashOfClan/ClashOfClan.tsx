import './ClashOfClan.scss'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import { LoaderContextProvider } from "./Context/LoaderContext"
import Home from "./Component/Home"
import { ClanInfo } from "./Component/ClanInfo/ClanInfo"
import About from "./Component/About"
import Contact from "./Component/Contact"
import { PageNotFound } from "./Component/404Page/PageNotFound"
import { Bounce, ToastContainer } from "react-toastify"
import Layout from "./Layout/Layout"

export const ClashOfClan = () => {
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
      <Route path="/" element={
        <LoaderContextProvider>
          <Layout />
        </LoaderContextProvider>
      }>
        <Route path="/" element={<Home />} />
        <Route path="clan-info" element={<ClanInfo />} />
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
    </>
  )
}
