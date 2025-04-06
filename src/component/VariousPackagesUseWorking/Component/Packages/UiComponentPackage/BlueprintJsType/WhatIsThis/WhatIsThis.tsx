export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>blueprint js</b> package to manage the <b>components & other feature</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <p className="vpu_npm_list">
                    <span>To use the core package you need to <b>install</b> the library by using command:</span>
                    <div>
                      <a>npm i --save @blueprintjs/core</a>
                    </div>
                  </p>
                  <p className="vpu_import_list">
                    <span>
                      <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                    </span>
                    <div>
                      <a>import '@blueprintjs/core/lib/css/blueprint.css';</a>
                    </div>
                  </p>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://github.com/palantir/blueprint" target="_blank">https://github.com/palantir/blueprint</a>
                  <a className="visitDoc" href="https://blueprintjs.com/" target="_blank">https://blueprintjs.com/</a>
                  <a className="visitDoc" href="https://www.npmjs.com/package/@blueprintjs/core" target="_blank">https://www.npmjs.com/package/@blueprintjs/core</a>
                </div>
              </li>
              <li>
                <span>Some examples are given bellow:</span>
              </li>
            </ul>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.icons.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>blueprint js</b> additional package called <b>icons</b> package it is used for manage the <b>icons</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <p className="vpu_npm_list">
                    <span>To use the icon package you need to <b>install</b> the library by using command:</span>
                    <div>
                      <a>npm i --save @blueprintjs/icons</a>
                    </div>
                  </p>
                  <p className="vpu_import_list">
                    <span>
                      <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                    </span>
                    <div>
                      <a>@import "@blueprintjs/icons/lib/css/blueprint-icons.css";</a>
                    </div>
                  </p>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://blueprintjs.com/docs/#icons" target="_blank">https://blueprintjs.com/docs/#icons</a>
                </div>
              </li>
              <li>
                <span>Some examples are given bellow:</span>
              </li>
            </ul>
          </div > : null
      }
      {
        targetedTab === loaderData.packagesUsed.datetime2.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>blueprint js</b> additional package called <b>date time 2</b> package it is used for manage the <b>date time picker</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <p className="vpu_npm_list">
                    <span>To use this package you need to <b>install</b> the library by using command:</span>
                    <div>
                      <a>npm i --save @blueprintjs/datetime2</a>
                    </div>
                  </p>
                  <p className="vpu_import_list">
                    <span>
                      <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                    </span>
                    <div>
                      <a>@import "@blueprintjs/datetime2/lib/css/blueprint-datetime2.css";</a>
                    </div>
                  </p>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span>For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://blueprintjs.com/docs/#datetime2" target="_blank">https://blueprintjs.com/docs/#datetime2</a>
                </div>
              </li>
              <li>
                <span>Some examples are given bellow:</span>
              </li>
            </ul>
          </div > : null
      }
      {
        targetedTab === loaderData.packagesUsed.select.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>blueprint js</b> additional package called <b>select</b> package it is used for manage the <b>select picker</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <p className="vpu_npm_list">
                    <span>To use this package you need to <b>install</b> the library by using command:</span>
                    <div>
                      <a>npm i --save @blueprintjs/select</a>
                    </div>
                  </p>
                  <p className="vpu_import_list">
                    <span>
                      <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                    </span>
                    <div>
                      <a>@import "@blueprintjs/select/lib/css/blueprint-select.css";</a>
                    </div>
                  </p>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://blueprintjs.com/docs/#select" target="_blank">https://blueprintjs.com/docs/#select</a>
                </div>
              </li>
              <li>
                <span>Some examples are given bellow:</span>
              </li>
            </ul>
          </div > : null
      }
      {
        targetedTab === loaderData.packagesUsed.table.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>blueprint js</b> additional package called <b>table</b> package it is used for manage the <b>table listing</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <p className="vpu_npm_list">
                    <span>To use this package you need to <b>install</b> the library by using command</span>
                    <div>
                      <a>npm i --save @blueprintjs/table</a>
                    </div>
                  </p>
                  <p className="vpu_import_list">
                    <span>
                      <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                    </span>
                    <div>
                      <a>@import "@blueprintjs/table/lib/css/table.css";</a>
                    </div>
                  </p>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://blueprintjs.com/docs/#table" target="_blank">https://blueprintjs.com/docs/#table</a>
                </div>
              </li>
              <li>
                <span>Some examples are given bellow:</span>
              </li>
            </ul>
          </div > : null
      }
    </div >
  )
}