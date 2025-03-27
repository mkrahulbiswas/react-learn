import { Link } from "react-router"
import { RouteContext } from "../../Context/RouteContext"
import { useContext, useState } from "react"
import { IoMdAdd, IoMdClose } from "react-icons/io"
import { getRouteData } from "../../Database/RouteDatabase"
import { useHelper } from "../../hooks/useHelper"

export const Shared = ({ props }: any) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const { routePaths }: any = useContext(RouteContext)
  const routeData = getRouteData({})
  const handelToggleMenu = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  }
  return (
    <>
      {
        props.for == 'packagesSideNav' ?
          <div className="vpuSideMenu">
            <div className="vpuMenuMain">
              <div className="vpuMenuSub">
                <div className="vpuHeading">
                  <span>Packages</span>
                </div>
                <div className="vpuList">
                  {
                    Object.values(routeData.packages.nested).map((valOne: any, keyOne: any) => {
                      const isExpanded = expandedItem === valOne.route;
                      return (
                        <div className="vpuItem" key={keyOne}>
                          <div className="vpuHeading">
                            <span>
                              <Link to={useHelper({
                                type: 'routeConcatenate', data: [
                                  routePaths.packages.route,
                                  valOne.route,
                                ]
                              })}>{valOne.name}</Link>
                              <label onClick={() => handelToggleMenu(valOne.route)}>
                                {isExpanded ? <IoMdClose /> : <IoMdAdd />}
                              </label>
                            </span>
                          </div>
                          {
                            isExpanded && (
                              <div className={isExpanded ? "vpuLinks autoHeight" : "vpuLinks"}>
                                {
                                  Object.values(valOne.nested).map((valTwo: any, keyTwo: any) =>
                                    <Link key={keyTwo} to={useHelper({
                                      type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        valOne.route,
                                        valTwo.route,
                                      ]
                                    })}>{valTwo.name}</Link>
                                  )
                                }
                              </div>
                            )
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div> :
          < div className="vpuMainMenu">
            <div className="vpuMenuMain">
              <div className="vpuMenuSub">
                <div className="vpuHeading">
                  <span>Packages</span>
                </div>
                <div className="vpuList">
                  {
                    Object.values(routeData.packages.nested).map((valOne: any, keyOne: any) => {
                      return (
                        <div className="vpuItem" key={keyOne}>
                          <div className="vpuHeading">
                            <span>
                              <Link to={useHelper({
                                type: 'routeConcatenate', data: [
                                  routePaths.packages.route,
                                  valOne.route,
                                ]
                              })}>{valOne.name}</Link>
                            </span>
                          </div>
                          <div className="vpuLinks">
                            {
                              Object.values(valOne.nested).map((valTwo: any, keyTwo: any) =>
                                <Link key={keyTwo} to={useHelper({
                                  type: 'routeConcatenate', data: [
                                    routePaths.packages.route,
                                    valOne.route,
                                    valTwo.route,
                                  ]
                                })}>{valTwo.name}</Link>
                              )
                            }
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}
