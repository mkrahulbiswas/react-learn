import Moment from 'react-moment';

export const ExampleThree = () => {
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
          <Moment parse="YYYY-MM-DD HH:mm">
            1976-04-19 12:59
          </Moment>
        </div>
      </div>
    </>
  )
}