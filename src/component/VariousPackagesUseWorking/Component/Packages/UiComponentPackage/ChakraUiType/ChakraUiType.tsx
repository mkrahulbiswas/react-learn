import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react"
import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import { useLoaderData } from "react-router";

export const ChakraUiType = () => {
  let loaderData = useLoaderData();
  return (
    <div className="vpu_ocoplm_info">
      <div className="vpu_ocoplmi_main">
        <div className="vpu_ocoplmi_sub">
          <div className="vpu_ocoplmi_top">
            <div className="vpu_ocoplmi_heading">
              <span>{loaderData.info.name}</span>
              <p>{loaderData.info.about}</p>
            </div>
          </div>
          <div className="vpu_ocoplmi_middle">
            <WhatIsThis propsPass={{ loaderData }} />
          </div>
          <div className="vpu_ocoplmi_bottom">
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