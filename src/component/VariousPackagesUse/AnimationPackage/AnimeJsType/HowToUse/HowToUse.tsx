import { ExampleOne } from "./ExampleOne/ExampleOne"
import { ExampleThree } from "./ExampleThree/ExampleThree"
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
      </div>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example Two</h2>
        </div>
        <div className="exampleContent">
          <ExampleTwo />
        </div>
      </div>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example Three</h2>
        </div>
        <div className="exampleContent">
          <ExampleThree />
        </div>
      </div>
    </>
  )
}