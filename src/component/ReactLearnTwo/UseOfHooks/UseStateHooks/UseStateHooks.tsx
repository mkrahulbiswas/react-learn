import DerivedState from "./DerivedState/DerivedState";
import LiftingState from "./LiftingState/LiftingStateParent";
import UseStateBasic from "./UseStateBasic/UseStateBasic";
export default function UseStateHooks() {
  return (
    <>
      <UseStateBasic />
      <LiftingState />
      <DerivedState />
    </>
  )
}