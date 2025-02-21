import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UsingUseQuery from "./UsingUseQuery/UsingUseQuery";
import UsingUseQueries from "./UsingUseQueries/UsingUseQueries";

export default function DependentQueries() {
  return (
    <>
      <p>This is example of basic <b>dependent queries</b></p>
      <div className="row">
        <UsingUseQuery />
        <UsingUseQueries />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}