import { memo } from "react";

export const EOMFooter = memo(({ setBgColor }: any) => {
  console.log('Footer Component');

  return (
    <>
      <button className="btn btn-primary" onClick={() => setBgColor('red')}>Red</button>
      <button className="btn btn-primary ms-2" onClick={() => setBgColor('green')}>Green</button>
      <button className="btn btn-primary ms-2" onClick={() => setBgColor('yellow')}>Yellow</button>
    </>
  )
})
