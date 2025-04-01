export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData } = propsPass
  return (
    <div className="vpu_ocoplmim_overview">
      <div className="vpu_ocoplmimo_main">
        <div className="vpu_ocoplmimo_sub">
          <div className="vpu_ocoplmimo_tab">
            <div className="vpu_ocoplmimot_content">
              <div className="vpu_ocoplmimot_heading">
                <span>various packages of <b>{loaderData.info.name}</b></span>
              </div>
              <div className="vpu_ocoplmimot_list">
                <ul>
                  <li>
                    <span>Core</span>
                  </li>
                  <li>
                    <span>Icons</span>
                  </li>
                  <li>
                    <span>Datetime2</span>
                  </li>
                  <li>
                    <span>Select</span>
                  </li>
                  <li>
                    <span>Table</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="singleLineText">This is <b>blueprint js</b> package to manage the <b>components & other feature</b></span>
      <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
        <p><span className="npmCommand">npm i --save @blueprintjs/core</span></p>
      </span>
      <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <b>import '@blueprintjs/core/lib/css/blueprint.css';</b></span>
      <span className="singleLineText">For more info you can visit the site:
        <p><a className="visitDoc" href="https://github.com/palantir/blueprint" target="_blank">https://github.com/palantir/blueprint</a></p>
        <p><a className="visitDoc" href="https://blueprintjs.com/" target="_blank">https://blueprintjs.com/</a></p>
        <p><a className="visitDoc" href="https://www.npmjs.com/package/@blueprintjs/core" target="_blank">https://www.npmjs.com/package/@blueprintjs/core</a></p>
      </span>
      <hr />
      <span className="singleLineText">To use the icon package you need to <b>install</b> the library by using command:
        <p><span className="npmCommand">npm i --save @blueprintjs/icons</span></p>
      </span>
      <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <b>@import "@blueprintjs/icons/lib/css/blueprint-icons.css";</b></span>
      <span className="singleLineText">For more info you can visit the site:
        <p><a className="visitDoc" href="https://blueprintjs.com/docs/#icons" target="_blank">https://blueprintjs.com/docs/#icons</a></p>
      </span>
      <hr />
      <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
        <p>For Date Time 2: <span className="npmCommand">npm i --save @blueprintjs/datetime2</span></p>
      </span>
      <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <b>@import "@blueprintjs/datetime2/lib/css/blueprint-datetime2.css";</b></span>
      <span className="singleLineText">For more info you can visit the site:
        <p><a className="visitDoc" href="https://blueprintjs.com/docs/#datetime2" target="_blank">https://blueprintjs.com/docs/#datetime2</a></p>
      </span>
      <hr />
      <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
        <p>For Select: <span className="npmCommand">npm i --save @blueprintjs/select</span></p>
      </span>
      <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <b>@import "@blueprintjs/select/lib/css/blueprint-select.css";</b></span>
      <span className="singleLineText">For more info you can visit the site:
        <p><a className="visitDoc" href="https://blueprintjs.com/docs/#select" target="_blank">https://blueprintjs.com/docs/#select</a></p>
      </span>
      <hr />
      <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
        <p>For Table: <span className="npmCommand">npm i --save @blueprintjs/table</span></p>
      </span>
      <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <b>@import "@blueprintjs/table/lib/css/table.css";</b></span>
      <span className="singleLineText">For more info you can visit the site:
        <p><a className="visitDoc" href="https://blueprintjs.com/docs/#table" target="_blank">https://blueprintjs.com/docs/#table</a></p>
      </span>
      <span className="singleLineText">Some example of <b>blueprint js</b> is:</span>
    </div>
  )
}