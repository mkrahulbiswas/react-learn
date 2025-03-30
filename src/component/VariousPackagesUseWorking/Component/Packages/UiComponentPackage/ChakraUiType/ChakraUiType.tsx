import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react"
import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"

export const ChakraUiType = () => {
  return (
    <div className="vpu_PackagesInfo">
      <div className="vpu_pi_main">
        <div className="vpu_pi_sub">
          <div className="vpu_pi_top">
            <div className="vpu_pi_heading">
              <span>Blueprint Js</span>
            </div>
          </div>
          <div className="vpu_pi_middle">
            <WhatIsThis />
          </div>
          <div className="vpu_pi_bottom">
            <ChakraProvider value={defaultSystem}>
              <HowToUse />
            </ChakraProvider>
            {/* <ColorModeProvider forcedTheme="dark">
              <Theme appearance="dark">
                <HowToUse />
              </Theme>
            </ColorModeProvider> */}
          </div>
        </div>
      </div>
    </div>
  )
}