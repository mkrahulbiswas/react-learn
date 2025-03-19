import { Box } from "@chakra-ui/react"

export const ExampleTwo = () => {
  return (
    <>
      <AnimatingCU />
    </>
  )
}

export const AnimatingCU = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <Box
            data-state="open"
            _open={{
              animation: "fade-in 300ms ease-out",
            }}
          >
            This is open
          </Box>
        </div>
      </div >
    </>
  )
}