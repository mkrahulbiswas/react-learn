import { FluentProvider, webLightTheme } from "@fluentui/react-components"
import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"

export const FluentUiType = () => {
  return (
    <div className="vpu_PackagesInfo">
      <div className="vpu_pi_main">
        <div className="vpu_pi_sub">
          <div className="vpu_pi_top">
            <div className="vpu_pi_heading">
              <span>Fluent Ui</span>
            </div>
          </div>
          <div className="vpu_pi_middle">
            <WhatIsThis />
          </div>
          <div className="vpu_pi_bottom">
            <FluentProvider theme={webLightTheme}>
              <HowToUse />
            </FluentProvider>
          </div>
        </div>
      </div>
    </div>
  )
}