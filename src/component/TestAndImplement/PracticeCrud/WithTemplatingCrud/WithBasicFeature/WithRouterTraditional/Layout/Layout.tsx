import { Outlet } from "react-router";
import Footer from "../Includes/Footer";
import Header from "../Includes/Header";

export default function Layout() {
  return (
    <main className="mainContainer">
      <div className="subContainer">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
  )
}