import { Outlet } from "react-router";
import Footer from "../Includes/Footer";
import Header from "../Includes/Header";

export const Layout = () => {
  return (
    <div className="vpu_main">
      <div className="vpu_sub">
        <section className="vpu_addContent vpu_ac_one"></section>
        <section className="vpu_originContent">
          <header className="vpu_oc_headerMain">
            <div className="vpu_oc_headerSub">
              <Header />
            </div>
          </header>
          <main className="vpu_oc_outletMain">
            <div className="vpu_oc_outletSub">
              <Outlet />
            </div>
          </main>
          <footer className="vpu_oc_footerMain">
            <div className="vpu_oc_footerSub">
              <Footer />
            </div>
          </footer>
        </section>
        <section className="vpu_addContent vpu_ac_two"></section>
      </div>
    </div>
  )
}