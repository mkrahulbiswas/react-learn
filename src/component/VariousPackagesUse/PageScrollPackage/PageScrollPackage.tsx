import { IntersectionObserverType } from "./IntersectionObserverType/IntersectionObserverType"
import { ReactScrollType } from "./ReactScrollType/ReactScrollType"
import { SmoothScrollbarType } from "./SmoothScrollbarType/SmoothScrollbarType"

export const PageScrollPackage = () => {
  return (
    <>
      <ReactScrollType />
      <SmoothScrollbarType />
      <IntersectionObserverType />
    </>
  )
}