import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import { defaultTheme, Provider } from '@adobe/react-spectrum';

export const SpectrumWebComponentsType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>Spectrum Web Components</span>
      </div>
      <div className="overView">
        <WhatIsThis />
      </div>
      <Provider theme={defaultTheme}>
        <div className="exampleMain">
          <HowToUse />
        </div>
      </Provider>
    </div>
  )
}