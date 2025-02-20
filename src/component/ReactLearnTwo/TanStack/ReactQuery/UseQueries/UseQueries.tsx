import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DynamicParallelQueries from "./DynamicParallelQueries/DynamicParallelQueries";

export default function UseQueries() {
  return (
    <>
      <p>This is example of basic <b>use query</b></p>
      <div className="row">
        <DynamicParallelQueries />
        {/* <CombineDynamicParallelQueries /> */}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}