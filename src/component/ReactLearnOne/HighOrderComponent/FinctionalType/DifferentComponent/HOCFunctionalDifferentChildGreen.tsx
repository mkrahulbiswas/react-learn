function HOCFunctionalDifferentChildGreen(props: any) {
  return (
    <div style={{ borderRadius: '10px', backgroundColor: 'green', margin: '10px', padding: '10px' }}>
      <props.cmp />
    </div>
  )
}
export default HOCFunctionalDifferentChildGreen