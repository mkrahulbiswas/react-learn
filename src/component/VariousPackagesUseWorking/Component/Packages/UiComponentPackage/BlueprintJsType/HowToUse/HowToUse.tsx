import { ExampleOne } from "./ExampleOne/ExampleOne"
import { ExampleThree } from "./ExampleThree/ExampleThree"
import { ExampleTwo } from "./ExampleTwo/ExampleTwo"

export const HowToUse = () => {
  return (
    <>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Component Based</h2>
        </div>
        <div className="exampleContent">
          <ExampleOne />
        </div>
      </div>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Using Icons</h2>
        </div>
        <div className="exampleContent">
          <ExampleTwo />
        </div>
      </div>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Using Date Time</h2>
        </div>
        <div className="exampleContent">
          <ExampleThree />
        </div>
      </div>
    </>
  )
}