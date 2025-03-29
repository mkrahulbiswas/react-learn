import { FluentProvider, webLightTheme } from "@fluentui/react-components"
import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"

export const FluentUiType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>Fluent Ui</span>
      </div>
      <div className="overView">
        <WhatIsThis />
      </div>
      <div className="exampleMain">
        <FluentProvider theme={webLightTheme}>
          <HowToUse />
        </FluentProvider>
      </div>
    </div>
  )
}