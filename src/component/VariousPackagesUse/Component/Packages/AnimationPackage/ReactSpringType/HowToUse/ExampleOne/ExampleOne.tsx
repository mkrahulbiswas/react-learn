import { animated } from '@react-spring/web'

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <StylingTypeOne />
      <StylingTypeTwo />
    </div>
  )
}

export const StylingTypeOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      {/* <div className="vpu_ocoplmimotceici_top">
          <span>Animated elements</span>
        </div> */}
      <div className="vpu_ocoplmimotceici_middle">
        <animated.div
          style={{
            width: 80,
            height: 80,
            background: '#ff6d6d',
            borderRadius: 8,
          }}
        />
      </div>
    </div>
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
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_middle">
        <animated.div style={style} />
      </div>
    </div>
  )
}