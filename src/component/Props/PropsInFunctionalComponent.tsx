function PropsInFunctionalComponent(props: any) {
  console.log(props)
  return (
    <div>
      <h1>{props.student}</h1>
    </div>
  )
}

export default PropsInFunctionalComponent
