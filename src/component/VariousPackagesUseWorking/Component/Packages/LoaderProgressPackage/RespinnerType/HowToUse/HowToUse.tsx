import { ExampleOne } from "./ExampleOne/ExampleOne"

export const HowToUse = () => {
  return (
    <div className="vpu_pi_example">
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example One</h2>
          <span><label style={{ color: 'red' }}>Note:</label> There some loader are not working properly</span>
        </div>
        <div className="exampleContent">
          <ExampleOne />
        </div>
      </div>
    </div>
  )
}