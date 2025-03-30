import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export const BootstrapType = () => {
  return (
    <div className="vpu_PackagesInfo">
      <div className="vpu_pi_main">
        <div className="vpu_pi_sub">
          <div className="vpu_pi_top">
            <div className="vpu_pi_heading">
              <span>Bootstrap</span>
            </div>
          </div>
          <div className="vpu_pi_middle">
            <WhatIsThis />
          </div>
          <div className="vpu_pi_bottom">
            <HowToUse />
          </div>
        </div>
      </div>
    </div>
  )
}