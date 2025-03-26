import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import '@blueprintjs/core/lib/css/blueprint.css';
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/table/lib/css/table.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "@blueprintjs/datetime2/lib/css/blueprint-datetime2.css";

export const BlueprintJsType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>Blueprint Js</span>
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