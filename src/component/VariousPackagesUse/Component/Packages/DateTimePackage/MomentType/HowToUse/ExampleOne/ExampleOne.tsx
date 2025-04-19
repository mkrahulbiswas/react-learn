import moment from 'moment';

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <DateFormatType />
      <TimeFormatType />
    </div>
  )
}

export const DateFormatType = () => {
  const currentDate = moment(new Date())
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Date with formatted</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <span>
          <span>{currentDate.format('YYYY/MM/DD')}</span>,&nbsp;&nbsp;&nbsp;
          <span>{currentDate.format('YY/MM/DD')}</span>,&nbsp;&nbsp;&nbsp;
          <span>{currentDate.format('YY/MM/Do')}</span>,&nbsp;&nbsp;&nbsp;
          <span>{currentDate.format('YY/MMM/Do')}</span>
        </span>
      </div>
    </div>
  )
}

export const TimeFormatType = () => {
  const currentTime = moment(new Date())
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Time with formatted</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <span>
          <span>{currentTime.format('h:mm:ss a')}</span>,&nbsp;&nbsp;&nbsp;
          <span>{currentTime.format('h:mm:ss A')}</span>,&nbsp;&nbsp;&nbsp;
          <span>{currentTime.format('h:mm a')}</span>,&nbsp;&nbsp;&nbsp;
          <span>{currentTime.format('H:mm a')}</span>
        </span>
      </div>
    </div>
  )
}