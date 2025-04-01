import { FluentProvider, webLightTheme } from "@fluentui/react-components"
import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import { useLoaderData } from "react-router";

export const FluentUiType = () => {
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
            <WhatIsThis propsPass={{ loaderData }} />
          </div>
          <div className="vpu_ocoplmi_bottom">
            <FluentProvider theme={webLightTheme}>
              <HowToUse />
            </FluentProvider>
          </div>
        </div>
      </div>
    </div>
  )
}