import { SpinnerCircular, SpinnerCircularSplit, SpinnerRound, SpinnerRoundOutlined, SpinnerRoundFilled, SpinnerDotted, SpinnerInfinity, SpinnerDiamond, SpinnerCircularFixed } from 'spinners-react';

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className="exampleCommon">
        {/* <div className="exampleCommonPoints">
          <span>This an example by using a live <b>API</b> response</span>
        </div> */}
        <div className="exampleCommonContent">
          <SpinnerCircularSplit size={50} thickness={100} speed={100} color="red" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <SpinnerRound size={50} thickness={200} speed={100} color="blue" />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <SpinnerRoundOutlined size={50} thickness={100} speed={50} color="yellow" />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <SpinnerRoundFilled size={50} thickness={100} speed={100} color="#36ad47" />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <SpinnerDotted size={50} thickness={100} speed={100} color="#36ad47" />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <SpinnerInfinity size={50} thickness={100} speed={100} color="brown" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <SpinnerDiamond size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <SpinnerCircularFixed size={60} thickness={100} speed={100} color="lime" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <SpinnerCircular size={50} thickness={100} speed={100} color="pink" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
      </div>
    </div>
  )
}