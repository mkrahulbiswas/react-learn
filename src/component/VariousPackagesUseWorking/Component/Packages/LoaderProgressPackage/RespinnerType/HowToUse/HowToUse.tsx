import { ExampleOne } from "./ExampleOne/ExampleOne"

export const HowToUse = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotce_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className="vpu_ocoplmimotce_item">
            <div className="vpu_ocoplmimotcei_heading">
              <span>Example One</span>
              <span><label>Note:</label> There some loader are not working properly</span>
            </div>
            <div className="vpu_ocoplmimotcei_content">
              <ExampleOne />
            </div>
          </div> : null
      }
    </div>
  )
}