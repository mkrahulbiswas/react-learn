import { ExampleOne } from "./ExampleOne/ExampleOne"
import { ExampleTwo } from "./ExampleTwo/ExampleTwo"

export const HowToUse = () => {
  return (
    <div className="vpu_pi_example">
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example One</h2>
          <span>This one is <b>alert box</b> using</span>
        </div>
        <div className="exampleContent">
          <ExampleOne />
        </div>
      </div>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example Two</h2>
          <span>This one is <b>tost box</b> using</span>
        </div>
        <div className="exampleContent">
          <ExampleTwo />
        </div>
      </div>
    </div>
  )
}