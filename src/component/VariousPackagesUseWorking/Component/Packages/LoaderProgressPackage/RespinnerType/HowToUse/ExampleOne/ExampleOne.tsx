import { CopperLoading, DashLoading, ClockLoading, SpinLoading, RotateLoading, BounceLoading, CircularLoading } from 'respinner';

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          {/* <div className="exampleCommonPoints">
          <span>This an example by using a live <b>API</b> response</span>
        </div> */}
          <div className="exampleCommonContent">
            <CopperLoading size={40} strokeWidth={3} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <DashLoading size={40} duration={1.6} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <ClockLoading size={40} strokeWidth={2} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            {/* <WaveLoading strokeWidth={3} count={2} /> */}
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <SpinLoading borderRadius={2} count={10} fill="#000000" />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <RotateLoading duration={1} opacity={0.4} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <BounceLoading gap={5} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <CircularLoading size={40} duration={1} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            {/* <BeatLoading fill="#4197ff" count={4} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}