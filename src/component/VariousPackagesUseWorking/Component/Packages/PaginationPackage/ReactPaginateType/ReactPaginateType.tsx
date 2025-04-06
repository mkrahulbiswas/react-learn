import { useState } from "react";
import { HowToUse } from "./HowToUse/HowToUse"
import { WhatIsThis } from "./WhatIsThis/WhatIsThis"
import { useLoaderData } from "react-router";

export const ReactPaginateType = () => {
  const loaderData = useLoaderData();
  const [targetedTab, setTargetedTab] = useState('core');
  const handelTargetedTab = (to: any) => {
    setTargetedTab(to)
  }
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
            <div className="vpu_ocoplmim_overview">
              <div className="vpu_ocoplmimo_main">
                <div className="vpu_ocoplmimo_sub">
                  <div className="vpu_ocoplmimo_tab">
                    {
                      Object.values(loaderData.packagesUsed).length > 1 ?
                        <div className="vpu_ocoplmimot_menu">
                          <div className="vpu_ocoplmimot_heading">
                            <span>various packages of <b>{loaderData.info.name}</b></span>
                          </div>
                          <div className="vpu_ocoplmimot_list">
                            <ul>
                              {
                                Object.values(loaderData.packagesUsed).map((val: any, key: any) => {
                                  return (
                                    <li key={key}>
                                      <span onClick={() => handelTargetedTab(val.type)} className={targetedTab === val.type ? 'vpu_ocoplmimot_hover' : ''}>{val.name}</span>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          </div>
                        </div> : null
                    }
                    < div className="vpu_ocoplmimot_content">
                      <div className="vpu_ocoplmimotc_about">
                        <WhatIsThis propsPass={{ loaderData, targetedTab }} />
                      </div>
                      <div className="vpu_ocoplmimotc_example">
                        <HowToUse propsPass={{ loaderData, targetedTab }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vpu_ocoplmi_bottom">
          </div>
        </div>
      </div>
    </div>
  )
}