import { ExampleOne } from "./ExampleOne/ExampleOne"
import { ExampleThree } from "./ExampleThree/ExampleThree"
import { ExampleTwo } from "./ExampleTwo/ExampleTwo"

export const HowToUse = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_pi_example">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <div className="exampleSub">
              <div className="exampleHeading">
                <h2>Example One</h2>
              </div>
              <div className="exampleContent">
                <ExampleOne />
              </div>
            </div>
            <div className="exampleSub">
              <div className="exampleHeading">
                <h2>Example Two</h2>
              </div>
              <div className="exampleContent">
                <ExampleTwo />
              </div>
            </div>
          </> : null
      }
      {
        targetedTab === loaderData.packagesUsed.timezone.type ?
          <div className="exampleSub">
            <div className="exampleHeading">
              <h2>Example Three</h2>
            </div>
            <div className="exampleContent">
              <ExampleThree />
            </div>
          </div> : null
      }
    </div>
  )
}