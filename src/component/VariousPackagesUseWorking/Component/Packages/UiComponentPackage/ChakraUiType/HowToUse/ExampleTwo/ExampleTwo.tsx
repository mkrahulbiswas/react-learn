import { Box } from "@chakra-ui/react"

export const ExampleTwo = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <AnimatingCU />
    </div>
  )
}

export const AnimatingCU = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_middle">
        <Box
          data-state="open"
          _open={{
            animation: "fade-in 300ms ease-out",
          }}
        >
          This is open
        </Box>
      </div>
    </div>
  )
}