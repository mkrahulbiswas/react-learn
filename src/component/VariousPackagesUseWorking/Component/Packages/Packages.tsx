import { Outlet, useLocation } from "react-router"
import { RouteContext } from "../../Context/RouteContext";
import { useContext, useState } from "react";
import { PackagesNavLink } from "../Shared/PackagesNavLink";
import { MdMenuOpen } from "react-icons/md";
import { TbPackages } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";

export const Packages = () => {
  const [quickLinkToggleCss, setQuickLinkToggleCss] = useState({
    top: '-100%',
  })
  const { routePaths }: any = useContext(RouteContext)
  const location = useLocation();
  const lastSegment = location.pathname.split("/").pop();
  const handelQuickLink = (data: any) => {
    if (data.type === "open") {
      setQuickLinkToggleCss({
        ...quickLinkToggleCss,
        top: '0',
      })
      document.body.style.overflow = "hidden";
    } else {
      setQuickLinkToggleCss({
        ...quickLinkToggleCss,
        top: '-110%',
      })
      document.body.style.overflow = "scroll";
    }
  }
  return (
    <div className="vpuPackagesMain">
      <div className="vpuPackagesSub">
        {
          lastSegment == routePaths.packages.route ?
            <PackagesNavLink props={{ for: 'main' }} /> :
            <PackagesNavLink props={{ for: 'side' }} />
        }
        <div className="vpuPackagesFloating">
          <div className="vpuFloatingTab">
            <label>
              <MdMenuOpen />
            </label>
            <span className="vpuFloatingAction" onClick={() => handelQuickLink({ type: 'open' })}>
              <TbPackages />
            </span>
          </div>
          <div className="vpuFloatingContent">
            <div className="vpuFloatingLink" style={quickLinkToggleCss}>
              <div className="vpuFloatingLinkTop">
                <span onClick={() => handelQuickLink({ type: 'close' })}>
                  <IoCloseSharp />
                </span>
              </div>
              <div className="vpuFloatingMiddle">
                <PackagesNavLink props={{ for: 'floating', closeFloating: handelQuickLink }} />
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div >
  )
}
