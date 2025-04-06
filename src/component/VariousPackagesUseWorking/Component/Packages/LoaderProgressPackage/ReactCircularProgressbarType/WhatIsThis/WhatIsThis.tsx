export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>react circular progressbar</b> package to manage the <b>progress bar</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <div className="vpu_ocoplmimotcain_common vpu_npm_list">
                    <p>
                      <span>To use this package you need to <b>install</b> the library by using command:</span>
                      <div>
                        <a>npm install --save-dev react-circular-progressbar</a>
                      </div>
                    </p>
                  </div>
                  <div className="vpu_ocoplmimotcain_common vpu_import_list">
                    <p>
                      <span>
                        <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                      </span>
                      <div className="vpu_import_item">
                        <a>npm 'react-circular-progressbar/dist/styles.css';</a>
                      </div>
                    </p>
                  </div>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://github.com/kevinsqi/react-circular-progressbar#readme" target="_blank">https://github.com/kevinsqi/react-circular-progressbar#readme</a>
                  <a className="visitDoc" href="https://www.npmjs.com/package/react-circular-progressbar" target="_blank">https://www.npmjs.com/package/react-circular-progressbar</a>
                </div>
              </li>
              <li>
                <span>Some examples are given bellow:</span>
              </li>
            </ul>
          </div> : null
      }
    </div >
  )
}