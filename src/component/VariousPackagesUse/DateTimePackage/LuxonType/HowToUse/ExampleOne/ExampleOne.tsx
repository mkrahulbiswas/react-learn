import { DateTime } from "luxon"

export const ExampleOne = () => {
  return (
    <>
      <DateFormatType />
      <TimeFormatType />
    </>
  )
}

export const DateFormatType = () => {
  const date = DateTime.now()
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Date Formatter</span>
        </div>
        <div className="exampleCommonContent">
          <span>{date.toLocaleString(DateTime.DATE_FULL)}</span>,&nbsp;&nbsp;
          <span>{date.toFormat('yyyy LLL dd')}</span>
        </div>
      </div >
    </>
  )
}

export const TimeFormatType = () => {
  const date = DateTime.now()
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Time Formatter</span>
        </div>
        <div className="exampleCommonContent">
          <span>{date.toISOTime()}</span>,&nbsp;&nbsp;
          <span>{date.toFormat('hh:mm a')}</span>,&nbsp;&nbsp;
          <span>{date.toLocaleString(DateTime.TIME_SIMPLE)}</span>
        </div>
      </div >
    </>
  )
}