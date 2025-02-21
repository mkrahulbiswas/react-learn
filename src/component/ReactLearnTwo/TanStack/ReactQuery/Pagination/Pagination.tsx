import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PaginatedQueries from "./PaginatedQueries/PaginatedQueries";

export default function Pagination() {
  return (
    <>
      <p>This is example of basic <b>use queries</b></p>
      <div className="row">
        <PaginatedQueries />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}