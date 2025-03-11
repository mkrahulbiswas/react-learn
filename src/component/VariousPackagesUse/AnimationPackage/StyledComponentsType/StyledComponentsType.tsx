import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"

export const StyledComponentsType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>Styled Components</span>
      </div>
      <div className="overView">
        <WhatIsThis />
      </div>
      <div className="exampleMain">
        <HowToUse />
      </div>
    </div>
  )
}