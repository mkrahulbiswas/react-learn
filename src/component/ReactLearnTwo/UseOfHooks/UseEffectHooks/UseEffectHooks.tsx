import UseEffectBasic from "./UseEffectBasic/UseEffectBasic";
import UseEffectCleanup from "./UseEffectCleanup/UseEffectCleanup";
import UseEffectMultipleTime from "./UseEffectMultipleTime/UseEffectMultipleTime";
export default function UseEffectHooks() {
  return (
    <>
      <UseEffectMultipleTime />
      <UseEffectCleanup />
      <UseEffectBasic />
    </>
  )
}