import { Link, useLocation } from "react-router"
import { RouteContext } from "../../Context/RouteContext"
import { useContext, useEffect, useState } from "react"
import { IoMdAdd, IoMdClose } from "react-icons/io"
import { getRouteData } from "../../Helpers/RouteHelper"
import { useHelper } from "../../Hooks/useHelper"

export const PackagesNavLink = ({ props }: any) => {
  const [toggleSideMenu, setToggleSideMenu] = useState({
    checkBy: '',
    lastSegment: '',
    isExpanded: false
  });
  const location = useLocation();
  const { routePaths }: any = useContext(RouteContext)
  const routeData = getRouteData({})
  const handelToggleSideMenu = (data: string) => {
    if (toggleSideMenu.checkBy == data) {
      setToggleSideMenu({ ...toggleSideMenu, checkBy: '', isExpanded: !toggleSideMenu.isExpanded })
    } else {
      setToggleSideMenu({ ...toggleSideMenu, checkBy: data, isExpanded: !toggleSideMenu.isExpanded })
    }
  }
  useEffect(() => {
    if (location) {
      const lastSegment = location.pathname.split("/")
      if (lastSegment.length == 3) {
        setToggleSideMenu({
          ...toggleSideMenu,
          checkBy: lastSegment[lastSegment.length - 1],
          lastSegment: lastSegment[lastSegment.length - 1],
          isExpanded: true
        })
      } else {
        setToggleSideMenu({
          ...toggleSideMenu,
          checkBy: lastSegment[lastSegment.length - 2],
          lastSegment: lastSegment[lastSegment.length - 1],
          isExpanded: true
        })
      }
    }
  }, [location])
  return (
    <>
      {
        props.for == 'packagesSideNav' ?
          <div className="vpuSideMenu">
            <div className="vpuMenuMain">
              <div className="vpuMenuSub">
                <div className="vpuTitle">
                  <span>Packages</span>
                </div>
                <div className="vpuList">
                  {
                    Object.values(routeData.packages.nested).map((valOne: any, keyOne: any) => {
                      const isExpanded = toggleSideMenu.checkBy === valOne.route;
                      return (
                        <div className="vpuItem" key={keyOne}>
                          <div className="vpuHeading">
                            <span>
                              <Link to={useHelper({
                                type: 'routeConcatenate', data: [
                                  routePaths.packages.route,
                                  valOne.route,
                                ]
                              })}>{valOne.info.name}</Link>
                              <label onClick={() => handelToggleSideMenu(valOne.route)}>
                                {isExpanded ? <IoMdClose /> : <IoMdAdd />}
                              </label>
                            </span>
                          </div>
                          {
                            isExpanded && (
                              <div className={isExpanded ? "vpuLinks autoHeight" : "vpuLinks"}>
                                {
                                  Object.values(valOne.nested).map((valTwo: any, keyTwo: any) =>
                                    <Link
                                      className={toggleSideMenu.lastSegment == valTwo.route ? 'active' : ''}
                                      key={keyTwo}
                                      to={useHelper({
                                        type: 'routeConcatenate', data: [
                                          routePaths.packages.route,
                                          valOne.route,
                                          valTwo.route,
                                        ]
                                      })}>{valTwo.info.name}</Link>
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
                <div className="vpuTitle">
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
                              })}>{valOne.info.name}</Link>
                            </span>
                            <p>{valOne.info.about}</p>
                          </div>
                          {
                            Object.values(valOne.nested).map((valTwo: any, keyTwo: any) =>
                              <div className="vpuLinks" key={keyTwo}>
                                <Link to={useHelper({
                                  type: 'routeConcatenate', data: [
                                    routePaths.packages.route,
                                    valOne.route,
                                    valTwo.route,
                                  ]
                                })}>{valTwo.info.name}</Link>
                                <p>{valTwo.info.about}</p>
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
          </div>
      }
    </>
  )
}
