import { ExampleOne } from "./ExampleOne/ExampleOne"
import { ExampleThree } from "./ExampleThree/ExampleThree"
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
                <h2>Example One</h2>
              </div>
              <div className="vpu_ocoplmimotcei_content">
                <ExampleOne />
              </div>
            </div>
            <div className="vpu_ocoplmimotce_item">
              <div className="vpu_ocoplmimotcei_heading">
                <h2>Example Two</h2>
              </div>
              <div className="vpu_ocoplmimotcei_content">
                <ExampleTwo />
              </div>
            </div>
            <div className="vpu_ocoplmimotce_item">
              <div className="vpu_ocoplmimotcei_heading">
                <h2>Example Three</h2>
              </div>
              <div className="vpu_ocoplmimotcei_content">
                <ExampleThree />
              </div>
            </div>
          </> : null
      }
    </div>
  )
}