import { ExampleOne } from "./ExampleOne/ExampleOne"
import 'animate.css';

export const HowToUse = () => {
  return (
    <div className="vpu_pi_example">
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example One</h2>
        </div>
        <div className="exampleContent">
          <ExampleOne />
        </div>
      </div>
    </div>
  )
}