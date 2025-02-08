import WithAsync from "./WithAsync/WithAsync";
import WithoutAsync from "./WithoutAsync/WithoutAsync";

export default function UsingFetch() {
  return (
    <>
      <WithoutAsync />
      <WithAsync />
    </>
  )
}