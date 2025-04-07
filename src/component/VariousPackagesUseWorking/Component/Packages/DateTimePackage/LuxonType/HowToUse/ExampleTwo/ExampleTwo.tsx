import { DateTime } from "luxon"

export const ExampleTwo = () => {
  const date = DateTime.local()
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Timezone</span>
        </div>
        <div className="exampleCommonContent">
          <span>{date.setZone("America/New_York").toString()}</span>,&nbsp;&nbsp;
          <span>{date.setZone("Asia/Kolkata").toString()}</span>
        </div>
      </div >
    </div>
  )
}