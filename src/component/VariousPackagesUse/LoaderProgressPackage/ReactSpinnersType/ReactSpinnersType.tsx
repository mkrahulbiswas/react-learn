import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"

export const ReactSpinnersType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>React Spinners</span>
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