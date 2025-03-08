function FCPPropsChild(props: any) {
  return (
    <div>
      <button onClick={() => props.clickForAction(Math.floor(Math.random() * 10))}>Click Me</button>
    </div>
  )
}
export default FCPPropsChild
