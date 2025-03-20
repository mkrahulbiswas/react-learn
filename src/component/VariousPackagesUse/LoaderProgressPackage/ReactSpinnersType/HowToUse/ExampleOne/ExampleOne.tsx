import { BeatLoader, CircleLoader, ClockLoader, GridLoader, PacmanLoader, RingLoader, ScaleLoader } from 'react-spinners';

export const ExampleOne = () => {
  return (
    <>
      <div className="exampleCommon">
        {/* <div className="exampleCommonPoints">
          <span>This an example by using a live <b>API</b> response</span>
        </div> */}
        <div className="exampleCommonContent">
          <BeatLoader />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <PacmanLoader />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <GridLoader />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <ClockLoader color="red" />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <CircleLoader />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <RingLoader />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <ScaleLoader />
        </div>
      </div>
    </>
  )
}