import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import 'react-circular-progressbar/dist/styles.css';

export const ReactCircularProgressbarType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>React Circular Progressbar</span>
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