import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

export const ReactGridLayoutType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>React Grid Layout</span>
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