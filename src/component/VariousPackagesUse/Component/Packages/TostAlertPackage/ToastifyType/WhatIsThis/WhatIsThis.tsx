export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>tostify</b> package to manage the <b>tost message</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <div className="vpu_npm_list">
                    <p>
                      <span>To use this package you need to <b>install</b> the library by using command:</span>
                      <div className="vpu_npm_package">
                        <a>npm install --save react-toastify</a>
                      </div>
                    </p>
                  </div>
                  <div className="vpu_import_list">
                    <p>
                      <span>
                        <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                      </span>
                      <div className="vpu_import_item">
                        <a>npm 'react-toastify/dist/ReactToastify.css';</a>
                      </div>
                    </p>
                  </div>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://fkhadra.github.io/react-toastify/introduction" target="_blank">https://fkhadra.github.io/react-toastify/introduction</a>
                  <a className="visitDoc" href="https://github.com/fkhadra/react-toastify" target="_blank">https://github.com/fkhadra/react-toastify</a>
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