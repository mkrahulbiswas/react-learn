import { Outlet, useLocation } from "react-router"
import { Shared } from "../Shared/Shared"
import { RouteContext } from "../../Context/RouteContext";
import { useContext } from "react";

export const Packages = () => {
  const { routePaths }: any = useContext(RouteContext)
  const location = useLocation();
  const lastSegment = location.pathname.split("/").pop();
  return (
    <div className="vpuPackagesMain">
      <div className="vpuPackagesSub">
        {
          lastSegment == routePaths.packages.route ?
            <Shared props={{ for: 'packagesMainNav' }} /> :
            <Shared props={{ for: 'packagesSideNav' }} />
        }
        <Outlet />
      </div>
    </div >
  )
}
