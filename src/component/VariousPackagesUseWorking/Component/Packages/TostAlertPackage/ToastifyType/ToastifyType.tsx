import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from "react-router";

export const ToastifyType = () => {
  let loaderData = useLoaderData();
  return (
    <div className="vpu_ocoplm_info">
      <div className="vpu_ocoplmi_main">
        <div className="vpu_ocoplmi_sub">
          <div className="vpu_ocoplmi_top">
            <div className="vpu_ocoplmi_heading">
              <span>{loaderData.info.name}</span>
              <p>{loaderData.info.about}</p>
            </div>
          </div>
          <div className="vpu_ocoplmi_middle">
            <WhatIsThis />
          </div>
          <div className="vpu_ocoplmi_bottom">
            <HowToUse />
          </div>
        </div>
      </div>
    </div>
  )
}