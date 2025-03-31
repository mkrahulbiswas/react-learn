import { LoadingBarContainer } from "react-top-loading-bar";
import { HowToUse } from "./HowToUse/HowToUse";
import { WhatIsThis } from "./WhatIsThis/WhatIsThis";
import { useLoaderData } from "react-router";

export const ReactTopLoadingBarType = () => {
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
            <LoadingBarContainer>
              <HowToUse />
            </LoadingBarContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
