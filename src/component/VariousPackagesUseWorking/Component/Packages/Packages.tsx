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
    <div className="vpu_oco_packagesMain">
      <div className="vpu_oco_packagesSub">
        {
          lastSegment == routePaths.packages.route ?
            <PackagesNavLink props={{ for: 'main' }} /> :
            <PackagesNavLink props={{ for: 'side' }} />
        }
        <div className="vpu_ocop_floating">
          <div className="vpu_ocopf_tab">
            <label>
              <MdMenuOpen />
            </label>
            <span className="vpu_ocopf_action" onClick={() => handelQuickLink({ type: 'open' })}>
              <TbPackages />
            </span>
          </div>
          <div className="vpu_ocopf_content">
            <div className="vpu_ocopf_link" style={quickLinkToggleCss}>
              <div className="vpu_ocopfl_top">
                <span onClick={() => handelQuickLink({ type: 'close' })}>
                  {/* <IoCloseSharp /> */}
                  close
                </span>
              </div>
              <div className="vpu_ocopfl_middle">
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
