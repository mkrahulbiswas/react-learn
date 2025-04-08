import { BeatLoader, CircleLoader, ClockLoader, GridLoader, PacmanLoader, RingLoader, ScaleLoader } from 'react-spinners';

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_item'>
        {/* <div className="exampleCommonPoints">
          <span>This an example by using a live <b>API</b> response</span>
        </div> */}
        <div className="exampleCommonContent">
          <BeatLoader />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent">
          <PacmanLoader />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent">
          <GridLoader />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent">
          <ClockLoader color="red" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent">
          <CircleLoader />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent">
          <RingLoader />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommonContent">
          <ScaleLoader />
        </div>
      </div>
    </div>
  )
}