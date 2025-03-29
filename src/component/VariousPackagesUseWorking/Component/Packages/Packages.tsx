import { Outlet, useLocation } from "react-router"
import { RouteContext } from "../../Context/RouteContext";
import { useContext } from "react";
import { PackagesNavLink } from "../Shared/PackagesNavLink";
import { MdMenuOpen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export const Packages = () => {
  const { routePaths }: any = useContext(RouteContext)
  const location = useLocation();
  const lastSegment = location.pathname.split("/").pop();
  return (
    <div className="vpuPackagesMain">
      <div className="vpuPackagesSub">
        {
          lastSegment == routePaths.packages.route ?
            <PackagesNavLink props={{ for: 'packagesMainNav' }} /> :
            <PackagesNavLink props={{ for: 'packagesSideNav' }} />
        }
        <div className="vpuPackagesQuickLink">
          <div className="vpuPackagesQuickLinkButtons">
            <label>
              <MdMenuOpen />
              {/* <IoMdClose /> */}
            </label>
            <span className="vpuPackagesLinkAction">a</span>
            <span className="vpuPackagesLinkAction">a</span>
          </div>
          <div className="vpuPackagesQuickLinkContent">
            <div className="vpuPackagesLinkContent">
              <PackagesNavLink props={{ for: 'packagesSideNav' }} />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div >
  )
}
