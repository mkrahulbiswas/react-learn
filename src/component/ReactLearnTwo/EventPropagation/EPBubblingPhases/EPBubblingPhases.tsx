export default function EPBubblingPhases() {
  return (
    <>
      <p>Using Event Propagation Bubbling Phases:</p>
      <WithoutStopPropagation />
      <WithStopPropagation />
      <hr />
    </>
  )
}

const WithoutStopPropagation = () => {
  const firstClick = () => {
    console.log('This is first click')
  }
  const secondClick = () => {
    console.log('This is second click')
  }
  const thirdClick = () => {
    console.log('This is third click')
  }
  return (
    <>
      <div className="p-3 bg-primary mb-3" onClick={thirdClick}>
        <div className="p-3 bg-warning">
          <div className="p-3 bg-info" onClick={secondClick}>
            <div className="p-3 bg-success" onClick={firstClick}></div>
          </div>
        </div>
      </div>
    </>
  )
}

const WithStopPropagation = () => {
  const firstClick = (event: any) => {
    event.stopPropagation()
    console.log('This is first click')
  }
  const secondClick = (event: any) => {
    event.stopPropagation()
    console.log('This is second click')
  }
  const thirdClick = (event: any) => {
    event.stopPropagation()
    console.log('This is third click')
  }
  return (
    <>
      <div className="p-3 bg-primary" onClick={thirdClick}>
        <div className="p-3 bg-warning">
          <div className="p-3 bg-info" onClick={secondClick}>
            <div className="p-3 bg-success" onClick={firstClick}></div>
          </div>
        </div>
      </div>
    </>
  )
}