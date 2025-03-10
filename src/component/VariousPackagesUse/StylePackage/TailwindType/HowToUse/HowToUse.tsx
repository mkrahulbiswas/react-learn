import { ExampleOne } from "./ExampleOne/ExampleOne"

export const HowToUse = () => {
  return (
    <>
      <div className="exampleSub">
        <div className="exampleHeading">
          <h2>Basic Use</h2>
        </div>
        <div className="exampleContent">
          <ExampleOne />
        </div>
      </div>
    </>
  )
}