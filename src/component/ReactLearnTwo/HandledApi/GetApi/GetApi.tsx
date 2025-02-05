import ErrorHandling from "./ErrorHandling/ErrorHandling";
import UsingAxios from "./UsingAxios/UsingAxios";
import UsingFetch from "./UsingFetch/UsingFetch";

export default function GetApi() {
  return (
    <>
      <UsingAxios />
      <UsingFetch />
      <ErrorHandling />
    </>
  )
}