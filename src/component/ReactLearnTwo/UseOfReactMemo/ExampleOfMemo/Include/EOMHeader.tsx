import { memo } from "react";

function EOMHeader({ handelCount }: any) {
  console.log('Header Component');

  return (
    <>
      <button className="btn btn-success" onClick={() => handelCount('+')}>Increase</button>
      <button className="btn btn-danger ms-2" onClick={() => handelCount('-')}>Decrease</button>
    </>
  )
}
export default memo(EOMHeader)
