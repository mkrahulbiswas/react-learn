import { ExampleOne } from "./ExampleOne/ExampleOne"
import { ExampleTwo } from "./ExampleTwo/ExampleTwo"

export const HowToUse = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotce_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <div className="vpu_ocoplmimotce_item">
              <div className="vpu_ocoplmimotcei_heading">
                <span>Example One</span>
              </div>
              <div className="vpu_ocoplmimotcei_content">
                <ExampleOne />
              </div>
            </div>
            <div className="vpu_ocoplmimotce_item">
              <div className="vpu_ocoplmimotcei_heading">
                <span>Example Two</span>
              </div>
              <div className="vpu_ocoplmimotcei_content">
                <ExampleTwo />
              </div>
            </div>
          </> : null
      }
    </div>
  )
}