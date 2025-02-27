import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import InCaseOfStatus from "./InCaseOfStatus/InCaseOfStatus";
import InCaseOfUpdate from "./InCaseOfUpdate/InCaseOfUpdate";
import InCaseOfDelete from "./InCaseOfDelete/InCaseOfDelete";

export default function UseMutation() {
  return (
    <>
      <p>
        <span>This is example of basic <b>use mutation</b>. </span>
        <span><b style={{ color: 'red' }}>Note:</b> use mutation is used for basically in case of <b>create, update, delete</b> any data</span>
      </p>
      <div className="row">
        <InCaseOfDelete />
        <InCaseOfStatus />
        <InCaseOfUpdate />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}