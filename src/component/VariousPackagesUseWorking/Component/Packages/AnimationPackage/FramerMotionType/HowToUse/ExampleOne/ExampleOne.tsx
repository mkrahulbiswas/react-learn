import { motion } from "motion/react"

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
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <motion.div style={{ width: '15px', height: '20px', backgroundColor: 'pink' }} />
        </div>
      </div>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <motion.div style={{ backgroundColor: 'lime' }}>
            <span>HI</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export const StylingTypeTwo = () => {
  return (
    <>
    </>
  )
}