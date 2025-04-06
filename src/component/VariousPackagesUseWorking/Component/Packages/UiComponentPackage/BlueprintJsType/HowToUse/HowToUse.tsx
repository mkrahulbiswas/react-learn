import { ExampleOne } from "./ExampleOne/ExampleOne"
import { ExampleThree } from "./ExampleThree/ExampleThree"
import { ExampleTwo } from "./ExampleTwo/ExampleTwo"

export const HowToUse = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotce_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className="vpu_ocoplmimotce_item">
            <div className="vpu_ocoplmimotcei_heading">
              <h2>Component Based</h2>
            </div>
            <div className="vpu_ocoplmimotcei_content">
              <ExampleOne />
            </div>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.icons.type ?
          <div className="vpu_ocoplmimotce_item">
            <div className="vpu_ocoplmimotcei_heading">
              <h2>Using Icons</h2>
            </div>
            <div className="vpu_ocoplmimotcei_content">
              <ExampleTwo />
            </div>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.datetime2.type ?
          <div className="vpu_ocoplmimotce_item">
            <div className="vpu_ocoplmimotcei_heading">
              <h2>Using Date Time</h2>
            </div>
            <div className="vpu_ocoplmimotcei_content">
              <ExampleThree />
            </div>
          </div> : null
      }
    </div>
  )
}