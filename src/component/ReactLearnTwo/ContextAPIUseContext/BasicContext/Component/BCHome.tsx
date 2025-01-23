import { useContext } from "react"
import { BCCounter } from "./BCCounter"
import { BCCommon } from "../Context/BCCommon"

export const BCHome = () => {
  const { count }: any = useContext(BCCommon)
  return (
    <>
      <div className="bg-info p-2 mb-3">
        <h2>Counter is: {count}</h2>
        <br />
        <span>This is Home Page</span>
        <hr />
        <BCCounter />
        <BCCounter />
      </div>
    </>
  )
}