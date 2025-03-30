import { ExampleOne } from "./ExampleOne/ExampleOne"

export const HowToUse = () => {
  return (
    <div className="vpu_pi_example">
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example One</h2>
          <span>
            <label style={{ color: "red" }}>NOTE:&nbsp;&nbsp;</label>
            this is just for using the <b>bootstrap class</b>, there no <b>element</b> will work directly. For using <b>bootstrap element</b> you need to use <b>react-bootstrap</b>.
          </span>
        </div>
        <div className="exampleContent">
          <ExampleOne />
        </div>
      </div>
    </div>
  )
}