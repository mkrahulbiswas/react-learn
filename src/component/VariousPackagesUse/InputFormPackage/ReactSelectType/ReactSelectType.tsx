import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"

export const ReactSelectType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>React Select</span>
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