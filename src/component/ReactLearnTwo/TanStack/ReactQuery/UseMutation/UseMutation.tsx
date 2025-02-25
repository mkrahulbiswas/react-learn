import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Overview from "./Overview/Overview";

export default function UseMutation() {
  return (
    <>
      <p>This is example of basic <b>use mutation</b></p>
      <div className="row">
        <Overview />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}