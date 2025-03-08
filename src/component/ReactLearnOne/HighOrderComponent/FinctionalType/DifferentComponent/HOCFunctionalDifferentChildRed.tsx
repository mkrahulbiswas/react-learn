function HOCFunctionalDifferentChildRed(props: any) {
  return (
    <div style={{ borderRadius: '10px', backgroundColor: 'red', margin: '10px', padding: '10px' }}>
      <props.cmp />
    </div>
  )
}
export default HOCFunctionalDifferentChildRed