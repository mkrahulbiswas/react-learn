export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>bootstrap</b> package to manage the <b>bootstrap class</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <p>
                  <span>To use this package you need to <b>install</b> the library by using command:</span>
                  <div className="vpu_npm_list">
                    <a>npm install bootstrap</a>
                  </div>
                </p>
                <p>
                  <span>
                    <label>Note:</label> after install package you need to <b>import</b> css & js path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <b>import 'bootstrap/dist/css/bootstrap.min.css';</b> and js path
                  </span>
                  <div className="vpu_import_list">
                    <a>npm 'bootstrap/dist/js/bootstrap.bundle.js';</a>
                  </div>
                </p>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">https://getbootstrap.com/docs/5.3/getting-started/introduction/</a>
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