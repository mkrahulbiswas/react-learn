import { motion } from "motion/react"

export const ExampleTwo = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <TypeOne />
      <TypeTwo />
      <TypeThree />
    </div>
  )
}

export const TypeOne = () => {
  return (
    <>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <motion.div initial={{
            width: '40px',
            height: '60px',
          }} animate={{
            width: '60px',
            height: '40px',
          }} />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <motion.div initial={{ x: "0px" }} animate={{ x: "50px" }}>
            <span>HI</span>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export const TypeTwo = () => {
  const initial = {
    width: '40px',
    height: '60px',
  }
  const animate = {
    width: '60px',
    height: '40px',
  }
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_middle">
        <motion.div initial={initial} animate={animate} />
      </div>
    </div>
  )
}

export const TypeThree = () => {
  const dataPass = {
    initial: {
      opacity: 0,
      width: '20px',
      height: '20px',
    },
    animate: {
      opacity: 1,
      width: '30px',
      height: '30px',
    }
  }
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_middle">
        <motion.div {...dataPass} style={{ backgroundColor: 'lightgray' }} />
      </div>
    </div>
  )
}