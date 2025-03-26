import { Outlet } from "react-router";
import Footer from "../Includes/Footer";
import Header from "../Includes/Header";

export const Layout = () => {
  return (
    <div className="vpuMain">
      <div className="vpuSub">
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
      </div>
    </div>
  )
}