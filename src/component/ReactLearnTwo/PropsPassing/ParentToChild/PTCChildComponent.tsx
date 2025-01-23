const PTChildComponent = (props: any) => {
  return (
    <div>
      <span>Name: <b>{props.userData.name}</b></span>&nbsp;||&nbsp;
      <span>Class: <b>{props.userData.class}</b></span>
    </div>
  )
}
export default PTChildComponent
