import { Outlet } from "react-router";
import Footer from "../Includes/Footer";
import Header from "../Includes/Header";
import './Layout.css';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}