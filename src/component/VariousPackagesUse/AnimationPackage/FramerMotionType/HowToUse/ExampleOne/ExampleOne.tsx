import { motion } from "motion/react"

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
        <div className="exampleCommonContent">
          <motion.div style={{ width: '15px', height: '20px', backgroundColor: 'pink' }} />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <motion.div style={{ backgroundColor: 'lime' }}>
            <span>HI</span>
          </motion.div>
        </div>
      </div >
    </>
  )
}
export const StylingTypeTwo = () => {
  return (
    <>
    </>
  )
}