import { InView, useInView } from "react-intersection-observer";

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <BasicImplement />
      <TrackVisibility />
    </div>
  )
}


export const TrackVisibility = () => {
  const { ref } = useInView({
    threshold: 1,
    trackVisibility: true,
    delay: 5000
  })

  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>This an example of <b>track visibility</b></span>
        </div>
        <div className="exampleCommonContent">
          <span ref={ref}>Loader</span>
        </div>
      </div>
    </>
  )
}


export const BasicImplement = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  })
  console.log(inView);
  console.log(entry);

  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Using function</span>
        </div>
        <div className="exampleCommonContent">
          <span ref={ref}>Loader</span>
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Using component</span>
        </div>
        <div className="exampleCommonContent">
          <InView>
            {({ inView, ref }) => (
              <div ref={ref}>
                <span>{`Header inside viewport: (${inView})`}</span>
              </div>
            )}
          </InView>
        </div>
      </div>
    </>
  )
}