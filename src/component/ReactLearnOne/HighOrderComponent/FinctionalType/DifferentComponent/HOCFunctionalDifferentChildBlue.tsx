function HOCFunctionalDifferentChildBlue(props: any) {
  return (
    <div style={{ borderRadius: '10px', backgroundColor: 'blue', margin: '10px', padding: '10px' }}>
      <props.cmp />
    </div>
  )
}
export default HOCFunctionalDifferentChildBlue