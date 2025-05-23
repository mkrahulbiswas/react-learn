import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Polling from "./Polling/Polling";

export default function UseQuery() {
  return (
    <>
      <p>This is example of basic <b>use query</b></p>
      <div className="row">
        {/* <StoreData /> */}
        {/* <GarbageCollection /> */}
        {/* <StaleTime /> */}
        <Polling />
        {/* <ResponseOptions /> */}
        {/* <Refetch /> */}
        {/* <SelectData /> */}
        {/* <DetailPage /> */}
        {/* <InitialQuery /> */}
        {/* <ParallelQueries /> */}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}