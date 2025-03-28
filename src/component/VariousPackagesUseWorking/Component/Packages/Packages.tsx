import { Outlet, useLocation } from "react-router"
import { RouteContext } from "../../Context/RouteContext";
import { useContext } from "react";
import { PackagesNavLink } from "../Shared/PackagesNavLink";

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
        <Outlet />
      </div>
    </div >
  )
}
