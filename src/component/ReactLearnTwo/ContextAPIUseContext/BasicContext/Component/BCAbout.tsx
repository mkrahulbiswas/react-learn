import { useContext } from "react"
import { BCCommon } from "../Context/BCCommon"
import { BCCounter } from "./BCCounter"

export const BCAbout = () => {
  const { count }: any = useContext(BCCommon)
  return (
    <>
      <div className="bg-info p-2 mb-3">
        <h2>Counter is: {count}</h2>
        <br />
        <span>This is About Page</span>
        <hr />
        <BCCounter />
        <BCCounter />
      </div>
    </>
  )
}