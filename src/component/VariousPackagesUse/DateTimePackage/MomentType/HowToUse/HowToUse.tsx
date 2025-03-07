import { ExampleOne } from "./ExampleOne/ExampleOne"
import { ExampleTwo } from "./ExampleTwo/ExampleTwo"

export const HowToUse = () => {
  return (
    <>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example One</h2>
        </div>
        <div className="exampleContent">
          <ExampleOne />
        </div>
        <div className="exampleContent">
          <ExampleTwo />
        </div>
        <div className="exampleContent">
          {/* <ExampleThree /> */}
        </div>
      </div>
    </>
  )
}