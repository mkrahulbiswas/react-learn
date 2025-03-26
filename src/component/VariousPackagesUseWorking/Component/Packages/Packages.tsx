import { Outlet } from "react-router"
import { Shared } from "../Shared/Shared"
import { PackagesContext } from "../../Context/PackagesContext"
import { RouteContext } from "../../Context/RouteContext"
import { CommonContext } from "../../Context/CommonContext"
import { useContext } from "react"

export const Packages = ({ routePaths }: any) => {
  const { textThree }: any = useContext(PackagesContext)
  const { textTwo }: any = useContext(RouteContext)
  const { textOne }: any = useContext(CommonContext)
  console.log('Packages->', textThree + ' - ' + textTwo + ' - ' + textOne);

  return (
    <div className="vpuPackages">
      <div className="vpuPackages">
        {/* <Shared propsPass={routePaths.packages} /> */}
        <Outlet />
      </div>
    </div>
  )
}
