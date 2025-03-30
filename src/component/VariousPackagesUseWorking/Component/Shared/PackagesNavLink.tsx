import { Link, Navigate, useLocation, useNavigate } from "react-router"
import { RouteContext } from "../../Context/RouteContext"
import { useContext, useEffect, useState } from "react"
import { IoMdAdd, IoMdClose } from "react-icons/io"
import { getRouteData } from "../../Helpers/RouteHelper"
import { useHelper } from "../../Hooks/useHelper"

export const PackagesNavLink = ({ props }: any) => {
  const [toggleMenu, setToggleMenu] = useState({
    checkBy: '',
    lastSegment: '',
    isExpanded: false,
    customStyle: {}
  });
  const location = useLocation();
  const navigate = useNavigate()
  const { routePaths }: any = useContext(RouteContext)
  const routeData = getRouteData({})
  const handelToggleMenu = (data: any) => {
    if (toggleMenu.checkBy == data.route) {
      setToggleMenu({
        ...toggleMenu,
        checkBy: '',
        isExpanded: !toggleMenu.isExpanded,
        customStyle: {
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
          backgroundImage: 'radial-gradient(circle 780.6px at 10% 20%, rgba(133, 255, 189, 1) 0%, rgba(255, 251, 125, 1) 90.7%)',
        }
      })
    } else {
      setToggleMenu({
        ...toggleMenu,
        checkBy: data.route,
        isExpanded: !toggleMenu.isExpanded,
        customStyle: {
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
          backgroundImage: 'radial-gradient(circle 780.6px at 10% 20%, rgba(133, 255, 189, 1) 0%, rgba(255, 251, 125, 1) 90.7%)',
        }
      })
    }
  }
  const visitLink = (data: any) => {
    if (data.for === 'floating') {
      props.closeFloating('close')
    }
    navigate(useHelper({
      type: 'routeConcatenate', data: [
        routePaths.packages.route,
        data.valOne?.route != undefined ? data.valOne.route : '',
        data.valTwo?.route != undefined ? data.valTwo.route : '',
      ]
    }))
  }
  useEffect(() => {
    if (location) {
      const lastSegment = location.pathname.split("/")
      if (lastSegment.length == 3) {
        setToggleMenu({
          ...toggleMenu,
          checkBy: lastSegment[lastSegment.length - 1],
          lastSegment: lastSegment[lastSegment.length - 1],
          isExpanded: true,
          customStyle: {
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            backgroundImage: 'radial-gradient(circle 780.6px at 10% 20%, rgba(133, 255, 189, 1) 0%, rgba(255, 251, 125, 1) 90.7%)',
          }
        })
      } else {
        setToggleMenu({
          ...toggleMenu,
          checkBy: lastSegment[lastSegment.length - 2],
          lastSegment: lastSegment[lastSegment.length - 1],
          isExpanded: true,
          customStyle: {
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            backgroundImage: 'radial-gradient(circle 780.6px at 10% 20%, rgba(133, 255, 189, 1) 0%, rgba(255, 251, 125, 1) 90.7%)',
          }
        })
      }
    }
  }, [location])
  return (
    <>
      {
        props.for == 'side' ?
          <div className="vpu_ocop_sideMenu">
            <div className="vpu_ocopsm_list">
              {
                Object.values(routeData.packages.nested).map((valOne: any, keyOne: any) => {
                  const isExpanded = toggleMenu.checkBy === valOne.route;
                  return (
                    <div className="vpu_ocopsm_item" key={keyOne}>
                      <div className="vpu_ocopsm_heading">
                        <span>
                          <a onClick={() => visitLink({ valOne, for: 'side' })}>{valOne.info.name}</a>
                          <label onClick={() => handelToggleMenu({ for: 'side', route: valOne.route })}>
                            {isExpanded ? <IoMdClose /> : <IoMdAdd />}
                          </label>
                        </span>
                      </div>
                      {
                        isExpanded && (
                          <div className={isExpanded ? "vpu_ocopsm_links vpu_ocosm_autoHeight" : "vpu_ocosm_links"}>
                            {
                              Object.values(valOne.nested).map((valTwo: any, keyTwo: any) =>
                                <a key={keyTwo}
                                  className={toggleMenu.lastSegment == valTwo.route ? 'active' : ''}
                                  onClick={() => visitLink({ valOne, valTwo, for: 'side' })}>{valTwo.info.name}</a>
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
          </div> : null
      }
      {
        props.for == 'floating' ?
          <div className="vpu_ocop_floatingMenu">
            <div className="vpu_ocopfm_title">
              <span>Packages</span>
            </div>
            <div className="vpu_ocopfm_list">
              {
                Object.values(routeData.packages.nested).map((valOne: any, keyOne: any) => {
                  const isExpanded = toggleMenu.checkBy === valOne.route;
                  return (
                    <div className="vpu_ocopfm_item" key={keyOne} style={isExpanded ? toggleMenu.customStyle : undefined}>
                      <div className="vpu_ocopfm_heading">
                        <span>
                          <a onClick={() => visitLink({ valOne, for: 'floating' })}>{valOne.info.name}</a>
                          <label onClick={() => handelToggleMenu({ for: 'floating', route: valOne.route })}>
                            {isExpanded ? <IoMdClose /> : <IoMdAdd />}
                          </label>
                        </span>
                      </div>
                      {
                        isExpanded && (
                          <div className='vpu_ocopfm_links'>
                            {
                              Object.values(valOne.nested).map((valTwo: any, keyTwo: any) =>
                                <a key={keyTwo}
                                  className={toggleMenu.lastSegment == valTwo.route ? 'active' : ''}
                                  onClick={() => visitLink({ valOne, valTwo, for: 'floating' })}>{valTwo.info.name}</a>
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
          </div> : null
      }
      {
        props.for == 'main' ?
          < div className="vpu_ocop_mainMenu">
            <div className="vpu_ocopmm_title">
              <span>Packages</span>
            </div>
            <div className="vpu_ocopmm_list">
              {
                Object.values(routeData.packages.nested).map((valOne: any, keyOne: any) => {
                  return (
                    <div className="vpu_ocopmm_item" key={keyOne}>
                      <div className="vpu_ocopmm_heading">
                        <span>
                          <a onClick={() => visitLink({ valOne, for: 'main' })}>{valOne.info.name}</a>
                        </span>
                        <div className="vpu_ocopmm_about">
                          <p>{valOne.info.about}</p>
                        </div>
                      </div>
                      <div className="vpu_ocopmm_linksMain">
                        {
                          Object.values(valOne.nested).map((valTwo: any, keyTwo: any) =>
                            <div className="vpu_ocopmm_links" key={keyTwo} onClick={() => visitLink({ valOne, valTwo, for: 'main' })}>
                              <div className="vpu_ocopmml_left">
                                <span>{keyTwo + 1}</span>
                              </div>
                              <div className="vpu_ocopmml_right">
                                <span>{valTwo.info.name}</span>
                                <span>{valTwo.info.about}</span>
                              </div>
                            </div>
                          )
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div> : null
      }
    </>
  )
}
