import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import 'react-toastify/dist/ReactToastify.css';

export const ToastifyType = () => {
  return (
    <div className="packages">
      <div className="heading">
        <span>Toastify</span>
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