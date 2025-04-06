export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>animate</b> package to manage the <b>animation</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <div className="vpu_npm_list">
                    <p>
                      <span>To use this package you need to <b>install</b> the library by using command:</span>
                      <div className="vpu_npm_package">
                        <a>npm install animate.css --save</a>
                      </div>
                    </p>
                  </div>
                  <div className="vpu_import_item">
                    <p>
                      <span>
                        <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                      </span>
                      <div className="vpu_import_item">
                        <a>npm 'animate.css';</a>
                      </div>
                    </p>
                  </div>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://animate.style/" target="_blank" >https://animate.style/</a>
                  <a className="visitDoc" href="https://github.com/animate-css/animate.css" target="_blank" >https://github.com/animate-css/animate.css</a>
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