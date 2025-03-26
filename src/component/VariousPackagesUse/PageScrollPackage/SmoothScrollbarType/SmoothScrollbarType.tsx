import { HowToUse } from "./HowToUse/HowToUse";
import { WhatIsThis } from "./WhatIsThis/WhatIsThis";

export const SmoothScrollbarType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>Smooth Scrollbar</span>
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
