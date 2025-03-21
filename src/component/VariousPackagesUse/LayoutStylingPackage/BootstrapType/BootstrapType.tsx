import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import 'bootstrap/dist/js/bootstrap.bundle.js';

export const BootstrapType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>Boorstrap</span>
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