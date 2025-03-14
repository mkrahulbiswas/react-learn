import { animated } from '@react-spring/web'

export const ExampleOne = () => {
  return (
    <>
      <StylingTypeOne />
      <StylingTypeTwo />
    </>
  )
}

export const StylingTypeOne = () => {
  return (
    <>
      <div className="exampleCommon">
        {/* <div className="exampleCommonPoints">
          <span>Animated elements</span>
        </div> */}
        <div className="exampleCommonContent">
          <animated.div
            style={{
              width: 80,
              height: 80,
              background: '#ff6d6d',
              borderRadius: 8,
            }}
          />
        </div>
      </div >
    </>
  )
}

export const StylingTypeTwo = () => {
  const style = {
    width: 80,
    height: 80,
    background: 'green',
    borderRadius: 8,
  }
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <animated.div style={style} />
        </div>
      </div >
    </>
  )
}