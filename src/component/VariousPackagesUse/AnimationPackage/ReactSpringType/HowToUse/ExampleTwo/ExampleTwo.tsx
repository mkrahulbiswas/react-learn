import { useSpring, animated } from '@react-spring/web'

export const ExampleTwo = () => {
  return (
    <>
      <AnimateTypeOne />
      <AnimateTypeTwo />
      <AnimateTypeThree />
    </>
  )
}

export const AnimateTypeOne = () => {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  })
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <animated.div
            style={{
              width: 80,
              height: 80,
              background: '#ff6d6d',
              borderRadius: 8,
              ...springs
            }}
          />
        </div>
      </div >
    </>
  )
}

export const AnimateTypeTwo = () => {

  const style = {
    width: 80,
    height: 80,
    background: 'green',
    borderRadius: 8,
    ...useSpring({
      from: { x: 0 },
      to: { x: - 100 },
    })
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

export const AnimateTypeThree = () => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )

  const style = {
    width: 80,
    height: 80,
    background: 'green',
    borderRadius: 8,
    textAlign: 'center' as const,
    ...props
  }

  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <animated.div style={style}>Hello</animated.div>
        </div>
      </div >
    </>
  )
}