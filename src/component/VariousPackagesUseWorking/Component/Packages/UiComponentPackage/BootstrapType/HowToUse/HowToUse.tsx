import { ExampleOne } from "./ExampleOne/ExampleOne"

export const HowToUse = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotce_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className="vpu_ocoplmimotce_item">
            <div className="vpu_ocoplmimotcei_heading">
              <h2>Example One</h2>
              <span>
                <label style={{ color: 'red' }}>NOTE:&nbsp;&nbsp;</label>
                for react it is recormended to use <b>react-bootstrap</b> instate of plane bootstrap
              </span>
            </div>
            <div className="vpu_ocoplmimotcei_content">
              <ExampleOne />
            </div>
          </div> : null
      }
    </div>
  )
}