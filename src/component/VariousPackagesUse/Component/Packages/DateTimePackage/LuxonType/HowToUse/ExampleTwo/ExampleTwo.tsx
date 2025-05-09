import { DateTime } from "luxon"

export const ExampleTwo = () => {
  const date = DateTime.local()
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_top">
          <span>Timezone</span>
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <span>{date.setZone("America/New_York").toString()}</span>,&nbsp;&nbsp;
          <span>{date.setZone("Asia/Kolkata").toString()}</span>
        </div>
      </div>
    </div>
  )
}