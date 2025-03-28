import moment from 'moment';

export const ExampleOne = () => {
  return (
    <>
      <DateFormatType />
      <TimeFormatType />
    </>
  )
}

export const DateFormatType = () => {
  const currentDate = moment(new Date())
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Date with formatted</span>
        </div>
        <div className="exampleCommonContent">
          <span>
            <span>{currentDate.format('YYYY/MM/DD')}</span>,&nbsp;&nbsp;&nbsp;
            <span>{currentDate.format('YY/MM/DD')}</span>,&nbsp;&nbsp;&nbsp;
            <span>{currentDate.format('YY/MM/Do')}</span>,&nbsp;&nbsp;&nbsp;
            <span>{currentDate.format('YY/MMM/Do')}</span>
          </span>
        </div>
      </div>
    </>
  )
}

export const TimeFormatType = () => {
  const currentTime = moment(new Date())
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Time with formatted</span>
        </div>
        <div className="exampleCommonContent">
          <span>
            <span>{currentTime.format('h:mm:ss a')}</span>,&nbsp;&nbsp;&nbsp;
            <span>{currentTime.format('h:mm:ss A')}</span>,&nbsp;&nbsp;&nbsp;
            <span>{currentTime.format('h:mm a')}</span>,&nbsp;&nbsp;&nbsp;
            <span>{currentTime.format('H:mm a')}</span>
          </span>
        </div>
      </div>
    </>
  )
}