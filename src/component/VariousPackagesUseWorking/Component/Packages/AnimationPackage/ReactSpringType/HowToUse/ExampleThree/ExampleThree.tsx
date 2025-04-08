import { animated, useSprings } from '@react-spring/web'

export const ExampleThree = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      {/* <AnimateTypeOne /> */}
      <AnimateTypeThree />
    </div>
  )
}

// export const AnimateTypeOne = () => {
//   const springs = useSprings(2, {
//     from: { x: 0 },
//     to: { x: 100 },
//   })
//   return (
//     <>
//         <div className="exampleCommonContent">
//           {springs.map((props, index) => (
//             <animated.div
//               key={index}
//               style={{
//                 width: 80,
//                 height: 80,
//                 background: '#ff6d6d',
//                 borderRadius: 8,
//                 ...props as any
//               }}
//             />
//           ))}
//         </div>
//     </>
//   )
// }

export const AnimateTypeThree = () => {
  const [springs, _api] = useSprings(
    2,
    () => ({
      from: { x: 0 },
      to: { x: -100 },
    }),
    []
  )

  const style = {
    width: 80,
    height: 80,
    background: 'green',
    borderRadius: 8,
    textAlign: 'center' as const,
  }

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonContent">
        {springs.map((props, index) => (
          <animated.div key={index} style={{ ...style, ...props }}>Hello</animated.div>
        ))}
      </div>
    </div>
  )
}