import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import { defaultTheme, Provider } from '@adobe/react-spectrum';

export const SpectrumWebComponentsType = () => {
  return (
    <div className="vpu_PackagesInfo">
      <div className="vpu_pi_main">
        <div className="vpu_pi_sub">
          <div className="vpu_pi_top">
            <div className="vpu_pi_heading">
              <span>Spectrum Web Components</span>
            </div>
          </div>
          <div className="vpu_pi_middle">
            <WhatIsThis />
          </div>
          <div className="vpu_pi_bottom">
            <Provider theme={defaultTheme}>
              <HowToUse />
            </Provider>
          </div>
        </div>
      </div>
    </div>
  )
}