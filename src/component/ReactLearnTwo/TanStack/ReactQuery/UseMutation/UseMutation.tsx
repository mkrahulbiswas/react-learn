import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import InCaseOfDelete from "./InCaseOfDelete/InCaseOfDelete";

export default function UseMutation() {
  return (
    <>
      <p>
        <span>This is example of basic <b>use mutation</b>. </span>
        <span><b style={{ color: 'red' }}>Note:</b> use mutation is used for basically in case of <b>create, update, delete</b> any data</span>
      </p>
      <div className="row">
        {/* <InCaseOfSave /> */}
        {/* <InCaseOfUpdate /> */}
        {/* <InCaseOfStatus /> */}
        <InCaseOfDelete />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}