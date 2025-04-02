import { ExampleOne } from "./ExampleOne/ExampleOne"
import { ExampleThree } from "./ExampleThree/ExampleThree"
import { ExampleTwo } from "./ExampleTwo/ExampleTwo"

export const HowToUse = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_pi_example">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className="exampleSub">
            <div className="exampleHeading">
              <h2>Component Based</h2>
            </div>
            <div className="exampleContent">
              <ExampleOne />
            </div>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.icons.type ?
          <div className="exampleSub">
            <div className="exampleHeading">
              <h2>Using Icons</h2>
            </div>
            <div className="exampleContent">
              <ExampleTwo />
            </div>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.datetime2.type ?
          <div className="exampleSub">
            <div className="exampleHeading">
              <h2>Using Date Time</h2>
            </div>
            <div className="exampleContent">
              <ExampleThree />
            </div>
          </div> : null
      }
    </div>
  )
}