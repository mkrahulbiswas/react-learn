export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_heading">
              <span>This is <b>blueprint js</b> package to manage the <b>components & other feature</b></span>
            </div>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_npm">
              <ul>
                <li>
                  <label>To use the core package you need to <b>install</b> the library by using command:</label>
                  <span>
                    <p>npm i --save @blueprintjs/core</p>
                  </span>
                </li>
                <li>
                  <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                  <span>
                    <p>import '@blueprintjs/core/lib/css/blueprint.css';</p>
                  </span>
                </li>
              </ul>
            </div>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_site">
              <span className="singleLineText">For more info you can visit the site:</span>
              <ul>
                <li>
                  <a className="visitDoc" href="https://github.com/palantir/blueprint" target="_blank">https://github.com/palantir/blueprint</a>
                </li>
                <li>
                  <a className="visitDoc" href="https://blueprintjs.com/" target="_blank">https://blueprintjs.com/</a>
                </li>
                <li>
                  <a className="visitDoc" href="https://www.npmjs.com/package/@blueprintjs/core" target="_blank">https://www.npmjs.com/package/@blueprintjs/core</a>
                </li>
              </ul>
            </div>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.icons.type ?
          <div className='vpu_ocoplmimotca_item'>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_heading">
              <span>This is <b>blueprint js</b> additional package called <b>icons</b> package it is used for manage the <b>icons</b></span>
            </div>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_npm">
              <ul>
                <li>
                  <label>To use the icon package you need to <b>install</b> the library by using command:</label>
                  <span>
                    <p>npm i --save @blueprintjs/icons</p>
                  </span>
                </li>
                <li>
                  <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                  <span>
                    <p>@import "@blueprintjs/icons/lib/css/blueprint-icons.css";</p>
                  </span>
                </li>
              </ul>
            </div>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_site">
              <span className="singleLineText">For more info you can visit the site:</span>
              <ul>
                <li>
                  <a className="visitDoc" href="https://blueprintjs.com/docs/#icons" target="_blank">https://blueprintjs.com/docs/#icons</a>
                </li>
              </ul>
            </div>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.datetime2.type ?
          <div className='vpu_ocoplmimotca_item'>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_heading">
              <span>This is <b>blueprint js</b> additional package called <b>date time 2</b> package it is used for manage the <b>date time picker</b></span>
            </div>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_npm">
              <ul>
                <li>
                  <label>To use this package you need to <b>install</b> the library by using command:</label>
                  <span>
                    <p>npm i --save @blueprintjs/datetime2</p>
                  </span>
                </li>
                <li>
                  <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                  <span>
                    <p>@import "@blueprintjs/datetime2/lib/css/blueprint-datetime2.css";</p>
                  </span>
                </li>
              </ul>
            </div>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_site">
              <span className="singleLineText">For more info you can visit the site:</span>
              <ul>
                <li>
                  <a className="visitDoc" href="https://blueprintjs.com/docs/#datetime2" target="_blank">https://blueprintjs.com/docs/#datetime2</a>
                </li>
              </ul>
            </div>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.select.type ?
          <div className='vpu_ocoplmimotca_item'>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_heading">
              <span>This is <b>blueprint js</b> additional package called <b>select</b> package it is used for manage the <b>select picker</b></span>
            </div>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_npm">
              <ul>
                <li>
                  <label>To use this package you need to <b>install</b> the library by using command:</label>
                  <span>
                    <p>npm i --save @blueprintjs/select</p>
                  </span>
                </li>
                <li>
                  <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                  <span>
                    <p>@import "@blueprintjs/select/lib/css/blueprint-select.css";</p>
                  </span>
                </li>
              </ul>
            </div>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_site">
              <span className="singleLineText">For more info you can visit the site:</span>
              <ul>
                <li>
                  <a className="visitDoc" href="https://blueprintjs.com/docs/#select" target="_blank">https://blueprintjs.com/docs/#select</a>
                </li>
              </ul>
            </div>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.table.type ?
          <div className='vpu_ocoplmimotca_item'>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_heading">
              <span>This is <b>blueprint js</b> additional package called <b>table</b> package it is used for manage the <b>table listing</b></span>
            </div>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_npm">
              <ul>
                <li>
                  <label>To use this package you need to <b>install</b> the library by using command:</label>
                  <span>
                    <p>npm i --save @blueprintjs/table</p>
                  </span>
                </li>
                <li>
                  <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                  <span>
                    <p>@import "@blueprintjs/table/lib/css/table.css";</p>
                  </span>
                </li>
              </ul>
            </div>
            <div className="vpu_ocoplmimotcai_common vpu_ocoplmimotcai_site">
              <span className="singleLineText">For more info you can visit the site:</span>
              <ul>
                <li>
                  <a className="visitDoc" href="https://blueprintjs.com/docs/#table" target="_blank">https://blueprintjs.com/docs/#table</a>
                </li>
              </ul>
            </div>
          </div> : null
      }
    </div>
  )
}