import { HowToUse } from "./HowToUse/HowToUse";
import { WhatIsThis } from "./WhatIsThis/WhatIsThis";

export const ReactScrollType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>React Scroll</span>
      </div>
      <div className="overView">
        <WhatIsThis />
      </div>
      <div className="exampleMain">
        <HowToUse />
      </div>
    </div>
  );
};
