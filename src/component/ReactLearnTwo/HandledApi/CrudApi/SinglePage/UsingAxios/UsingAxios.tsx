import WithAsync from "./WithAsync/WithAsync";
import WithoutAsync from "./WithoutAsync/WithoutAsync";

export default function UsingAxios() {
  return (
    <>
      <WithoutAsync />
      <WithAsync />
    </>
  )
}