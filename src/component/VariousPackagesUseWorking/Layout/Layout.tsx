import { Outlet } from "react-router";
import Footer from "../Includes/Footer";
import Header from "../Includes/Header";

export const Layout = () => {
  return (
    <div className="vpuMain">
      <div className="vpuSub">
        <section className="vpuAdvertiseContent vpuAdvertiseContentOne"></section>
        <section className="vpuOriginContent">
          <header className="vpuHeaderMain">
            <div className="vpuHeaderSub">
              <Header />
            </div>
          </header>
          <main className="vpuOutletMain">
            <div className="vpuOutletSub">
              <Outlet />
            </div>
          </main>
          <footer className="vpuFooterMain">
            <div className="vpuFooterSub">
              <Footer />
            </div>
          </footer>
        </section>
        <section className="vpuAdvertiseContent vpuAdvertiseContentTwo"></section>
      </div>
    </div>
  )
}