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
              <span>
                <label>NOTE:&nbsp;&nbsp;</label>
                this is just for using the <b>bootstrap class</b>, there no <b>element</b> will work directly. For using <b>bootstrap element</b> you need to use <b>react-bootstrap</b>.
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