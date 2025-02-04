import WithAsync from "./WithAsync/GetApiUAWithAsync";
import WithoutAsync from "./WithoutAsync/GetApiUAWithoutAsync";

export default function UsingAxios() {
  return (
    <>
      <WithoutAsync />
      <WithAsync />
    </>
  )
}