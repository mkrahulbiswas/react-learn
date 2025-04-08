import { CopperLoading, DashLoading, ClockLoading, SpinLoading, RotateLoading, BounceLoading, CircularLoading } from 'respinner';

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_item'>
        {/* <div className="vpu_ocoplmimotceici_top">
          <span>This an example by using a live <b>API</b> response</span>
        </div> */}
        <div className="vpu_ocoplmimotceici_middle">
          <CopperLoading size={40} strokeWidth={3} />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <DashLoading size={40} duration={1.6} />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <ClockLoading size={40} strokeWidth={2} />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          {/* <WaveLoading strokeWidth={3} count={2} /> */}
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <SpinLoading borderRadius={2} count={10} fill="#000000" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <RotateLoading duration={1} opacity={0.4} />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <BounceLoading gap={5} />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <CircularLoading size={40} duration={1} />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          {/* <BeatLoading fill="#4197ff" count={4} /> */}
        </div>
      </div>
    </div>
  )
}