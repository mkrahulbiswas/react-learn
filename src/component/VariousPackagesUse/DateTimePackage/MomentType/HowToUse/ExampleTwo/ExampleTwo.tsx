import moment from "moment";

export const ExampleTwo = () => {
  return (
    <>
      <DateFormatType />
    </>
  )
}

export const DateFormatType = () => {
  const jun = moment("2024-06-01T12:00:00Z");
  const dec = moment("2024-12-01T12:00:00Z");
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Moment timezone use</span>
        </div>
        <div className="exampleCommonContent">
          In complete
        </div>
      </div>
    </>
  )
}