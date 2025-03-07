export const ExampleTwo = () => {
  return (
    <>
      <DateFormatType />
    </>
  )
}

export const DateFormatType = () => {
  const currentDate = new Date()
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Date with formatted</span>
        </div>
        <div className="exampleCommonContent">
          a
        </div>
      </div>
    </>
  )
}