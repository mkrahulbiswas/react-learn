import { ExampleOne } from "./ExampleOne/ExampleOne"

export const HowToUse = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_pi_example">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className="exampleSub">
            <div className="exampleHeading">
              <h2>Example One</h2>
              <span><label style={{ color: 'red' }}>Note:</label> There some loader are not working properly</span>
            </div>
            <div className="exampleContent">
              <ExampleOne />
            </div>
          </div> : null
      }
    </div>
  )
}