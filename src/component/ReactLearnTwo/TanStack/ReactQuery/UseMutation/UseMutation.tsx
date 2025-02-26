import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import InCaseOfStatus from "./InCaseOfStatus/InCaseOfStatus";

export default function UseMutation() {
  return (
    <>
      <p>
        <span>This is example of basic <b>use mutation</b>. </span>
        <span><b style={{ color: 'red' }}>Note:</b> use mutation is used for basically in case of <b>create, update, delete</b> any data</span>
      </p>
      <div className="row">
        {/* <InCaseOfDelete /> */}
        <InCaseOfStatus />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}