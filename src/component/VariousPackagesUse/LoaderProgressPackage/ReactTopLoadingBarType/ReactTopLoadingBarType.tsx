import { LoadingBarContainer } from "react-top-loading-bar"
import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"

export const ReactTopLoadingBarType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>React Top Loading Bar</span>
      </div>
      <div className="overView">
        <WhatIsThis />
      </div>
      <div className="exampleMain">
        <LoadingBarContainer>
          <HowToUse />
        </LoadingBarContainer>
      </div>
    </div>
  )
}