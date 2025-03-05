const FunctionAsPropsChild = (props: any) => {
  return (
    <div>
      <button onClick={() => props.clickForAction('Rahul Biswas')}>Click Me</button>
    </div>
  )
}

export default FunctionAsPropsChild
