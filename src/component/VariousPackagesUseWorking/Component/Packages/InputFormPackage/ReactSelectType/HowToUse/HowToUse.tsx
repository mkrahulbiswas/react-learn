import { ExampleOne } from "./ExampleOne/ExampleOne"
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
                <span>Single select examples each cases</span>
              </div>
              <div className="exampleContent">
                <ExampleOne />
              </div>
            </div>
            <div className="exampleSub">
              <div className="exampleHeading">
                <h2>Example Two</h2>
                <span>Multi select examples each cases</span>
              </div>
              <div className="exampleContent">
                <ExampleTwo />
              </div>
            </div>
          </> : null
      }
    </div>
  )
}