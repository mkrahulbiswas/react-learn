import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import InfiniteQueries from "./InfiniteQueries/InfiniteQueries";

export default function Pagination() {
  return (
    <>
      <p>This is example of basic <b>use queries</b></p>
      <div className="row">
        {/* <PaginatedQueries /> */}
        <InfiniteQueries />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}