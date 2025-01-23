import { useContext } from "react"
import { BCCommon } from "../Context/BCCommon"

export const BCCounter = () => {
  const { count, setCount }: any = useContext(BCCommon)
  return (
    <>
      <div className="row">
        <div className="col-4 d-flex justify-content-between mb-3">
          <button onClick={() => setCount(count + 1)} className="btn btn-success">Increase</button>
          <button onClick={() => setCount(count - 1)} className="btn btn-danger ms-2">Decrease</button>
        </div>
      </div>
    </>
  )
}