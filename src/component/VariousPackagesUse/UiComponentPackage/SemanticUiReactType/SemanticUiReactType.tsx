import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import 'semantic-ui-css/semantic.min.css'

export const SemanticUiReactType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>Semantic Ui React</span>
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