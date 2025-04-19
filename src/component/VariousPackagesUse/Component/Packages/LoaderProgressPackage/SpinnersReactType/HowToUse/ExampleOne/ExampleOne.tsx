import { SpinnerCircular, SpinnerCircularSplit, SpinnerRound, SpinnerRoundOutlined, SpinnerRoundFilled, SpinnerDotted, SpinnerInfinity, SpinnerDiamond, SpinnerCircularFixed } from 'spinners-react';

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_item'>
        {/* <div className="vpu_ocoplmimotceici_top">
          <span>This an example by using a live <b>API</b> response</span>
        </div> */}
        <div className="vpu_ocoplmimotceici_middle">
          <SpinnerCircularSplit size={50} thickness={100} speed={100} color="red" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <SpinnerRound size={50} thickness={200} speed={100} color="blue" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <SpinnerRoundOutlined size={50} thickness={100} speed={50} color="yellow" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <SpinnerRoundFilled size={50} thickness={100} speed={100} color="#36ad47" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <SpinnerDotted size={50} thickness={100} speed={100} color="#36ad47" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <SpinnerInfinity size={50} thickness={100} speed={100} color="brown" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <SpinnerDiamond size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <SpinnerCircularFixed size={60} thickness={100} speed={100} color="lime" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <SpinnerCircular size={50} thickness={100} speed={100} color="pink" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
      </div>
    </div>
  )
}