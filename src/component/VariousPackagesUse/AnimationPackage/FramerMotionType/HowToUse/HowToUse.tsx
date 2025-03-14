import { ExampleOne } from "./ExampleOne/ExampleOne"
import { ExampleTwo } from "./ExampleTwo/ExampleTwo"

export const HowToUse = () => {
  return (
    <>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>How to styling</h2>
        </div>
        <div className="exampleContent">
          <ExampleOne />
        </div>
      </div>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>How to animate</h2>
        </div>
        <div className="exampleContent">
          <ExampleTwo />
        </div>
      </div>
    </>
  )
}