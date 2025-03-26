import { ExampleOne } from "./ExampleOne/ExampleOne"

export const HowToUse = () => {
  return (
    <>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example One</h2>
          <span>
            <label style={{ color: 'red' }}>NOTE:&nbsp;&nbsp;</label>
            for react it is recormended to use <b>react-bootstrap</b> instate of plane bootstrap
          </span>
        </div>
        <div className="exampleContent">
          <ExampleOne />
        </div>
      </div>
    </>
  )
}