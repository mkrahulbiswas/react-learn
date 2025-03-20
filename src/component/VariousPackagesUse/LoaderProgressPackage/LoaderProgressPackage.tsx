import { RcProgressType } from "./RcProgressType/RcProgressType"
import { ReactCircularProgressbarType } from "./ReactCircularProgressbarType/ReactCircularProgressbarType"
import { ReactLoaderSpinnerType } from "./ReactLoaderSpinnerType/ReactLoaderSpinnerType"
import { ReactSpinnersType } from "./ReactSpinnersType/ReactSpinnersType"
import { ReactTopLoadingBarType } from "./ReactTopLoadingBarType/ReactTopLoadingBarType"
import { RespinnerType } from "./RespinnerType/RespinnerType"
import { SpinnersReactType } from "./SpinnersReactType/SpinnersReactType"

export const LoaderProgressPackage = () => {
  return (
    <>
      <ReactTopLoadingBarType />
      <ReactCircularProgressbarType />
      <RcProgressType />
      <RespinnerType />
      <SpinnersReactType />
      <ReactSpinnersType />
      <ReactLoaderSpinnerType />
    </>
  )
}