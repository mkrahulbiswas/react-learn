import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react"
import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"

export const ChakraUiType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>Chakra Ui</span>
      </div>
      <div className="overView">
        <WhatIsThis />
      </div>
      <div className="exampleMain">
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
  )
}