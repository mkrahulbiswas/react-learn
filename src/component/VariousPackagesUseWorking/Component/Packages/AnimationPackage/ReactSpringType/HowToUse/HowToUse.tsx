import { ExampleOne } from "./ExampleOne/ExampleOne"
import { ExampleThree } from "./ExampleThree/ExampleThree"
import { ExampleTwo } from "./ExampleTwo/ExampleTwo"

export const HowToUse = () => {
  return (
    <div className="vpu_pi_example">
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>How to style</h2>
        </div>
        <div className="exampleContent">
          <ExampleOne />
        </div>
      </div>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example of <b>useSpring</b></h2>
        </div>
        <div className="exampleContent">
          <ExampleTwo />
        </div>
      </div>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example of <b>useSprings</b></h2>
        </div>
        <div className="exampleContent">
          <ExampleThree />
        </div>
      </div>
    </div>
  )
}