export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>prime react</b> package to manage the <b>components & other feature</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <p>
                  <span>To use this package you need to <b>install</b> the library by using command:</span>
                  <div>
                    <a>npm install primereact</a>
                  </div>
                </p>
                <p>
                  <span>
                    <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. There is lots other <b>css theme</b> present, you can see by visit on <b>https://primereact.org/theming/#themes</b>. The css path is
                  </span>
                  <div>
                    <a>import "primereact/resources/themes/lara-light-cyan/theme.css";</a>
                  </div>
                </p>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://github.com/primefaces/primereact" target="_blank">https://github.com/primefaces/primereact</a>
                  <a className="visitDoc" href="https://primereact.org/" target="_blank">https://primereact.org/</a>
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
                <span>This is <b>prime react</b> additional package called <b>icons</b> package it is used for manage the <b>icons</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <p>
                  <span>To use primereact <b>icon</b> you need to <b>install</b> the library by using command:</span>
                  <div>
                    <a>npm install primeicons</a>
                  </div>
                </p>
                <p>
                  <span>
                    <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                  </span>
                  <div>
                    <a>import 'primeicons/primeicons.css';</a>
                  </div>
                </p>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://primereact.org/icons/" target="_blank">https://primereact.org/icons/</a>
                </div>
              </li>
              <li>
                <span>Some examples are given bellow:</span>
              </li>
            </ul>
          </div> : null
      }
    </div>
  )
}