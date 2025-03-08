import { Outlet } from "react-router";
import Footer from "../Includes/Footer";
import Header from "../Includes/Header";
import { BallTriangle } from "react-loader-spinner";
import { LoaderContext } from "../Context/LoaderContext";
import { useContext } from "react";

export default function Layout() {
  const { loader }: any = useContext(LoaderContext)
  return (
    <main className="mainContainer">
      <div className="subContainer">
        <Header />
        <div className="mainOutlet">
          <div className="subOutlet">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
      {loader ? <div className="loader">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loader}
        />
      </div> : null}
    </main>
  )
}