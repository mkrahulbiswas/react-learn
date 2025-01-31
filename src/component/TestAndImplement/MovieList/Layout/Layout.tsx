import { Outlet } from "react-router";
import Footer from "../Includes/Footer";
import Header from "../Includes/Header";
import { useContext, useState } from "react";
import { LoaderContext } from "../Context/LoaderContext";

export const Layout = () => {
  const [newLoader, setNewLoader] = useState(0)
  return (
    <div className="mainSection">
      <Loader />
      <Header />
      {/* <p>newLoader:{newLoader}</p> */}
      <Outlet context={{ newLoader, setNewLoader }} />
      <Footer />
    </div>
  )
}

export const Loader = () => {
  const { loader }: any = useContext(LoaderContext)
  return (
    <>
      {
        (loader == true) ?
          <div className="loader">
            <span>{loader} Loading....</span>
          </div> : null
      }
    </>
  )
}