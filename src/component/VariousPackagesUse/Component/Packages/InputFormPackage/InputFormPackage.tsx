import { Outlet, useLoaderData, useLocation } from "react-router"

export const InputFormPackage = () => {
  const loaderData = useLoaderData();
  const location = useLocation();
  const lastSegment = location.pathname.split("/").pop();
  return (
    <div className="vpu_ocop_list">
      {
        lastSegment == loaderData.route ?
          <div className="vpu_ocopl_top">
            <div className="vpu_ocoplt_heading">
              <span>{loaderData.info.name}</span>
            </div>
            <div className="vpu_ocoplt_content">
              <span>{loaderData.info.about}</span>
            </div>
          </div> : null
      }
      <div className="vpu_ocopl_middle">
        <Outlet />
        {/* <ReactSelectType /> */}
      </div>
      {
        lastSegment == loaderData.route ?
          <div className="vpu_ocopl_bottom">
          </div> : null
      }
    </div>
  )
}