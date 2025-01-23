export default function UncontrolledElement() {
  return (
    <>
      <h3><b>By defining static value</b></h3>
      <span>If you set any input value statically then you can not change or delete the input value because its become a uncontrolled input and react want to be controlled it by using state variable: </span>
      <input type="text" value="sadad" />. <span>In log you can see proper message where clearly say what is the problem, hear you need to call onChange event handlers.</span>
      <span><b>Note:</b> In case of uncontrolled component we use <b>Use Ref Hooks</b> for het input values</span>
      <hr />
    </>
  )
}