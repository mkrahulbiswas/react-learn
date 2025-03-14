import { ExampleOne } from "./ExampleOne/ExampleOne"

export const HowToUse = () => {
  return (
    <>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Example One</h2>
          <span>
            <label style={{ color: 'red' }}>NOTE:&nbsp;&nbsp;</label>
            No <b>bootstrap element</b> will work, only <b>bootstrap class</b> you can take to use. For element you need to check <b>react-bootstrap</b>
          </span>
        </div>
        <div className="exampleContent">
          <ExampleOne />
        </div>
      </div>
    </>
  )
}