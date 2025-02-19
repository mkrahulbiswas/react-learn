import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import StoreData from "./StoreData/StoreData";
import Refetch from "./Refetch/Refetch";

export default function UseQuery() {
  return (
    <>
      <p>This is example of basic <b>use query</b></p>
      <div className="row">
        <StoreData />
        {/* <GarbageCollection /> */}
        {/* <StaleTime /> */}
        {/* <Polling /> */}
        {/* <ResponseOptions /> */}
        <Refetch />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}