import { useContext } from "react"
import { MCCommonContext } from "../Context/MCommonContext"

export const MCHeader = () => {
  const { count }: any = useContext(MCCommonContext)
  return (
    <>
      <div className="mb-3">
        <h3>Count is: {count}</h3>
      </div>
    </>
  )
}