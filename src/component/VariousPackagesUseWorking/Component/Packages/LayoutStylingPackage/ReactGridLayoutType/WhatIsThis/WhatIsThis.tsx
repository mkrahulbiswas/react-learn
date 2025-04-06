export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>react grid layout</b> package to manage the <b>grid layout</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <div className="vpu_npm_list">
                    <p>
                      <span>To use this package you need to <b>install</b> the library by using command:</span>
                      <div className="vpu_npm_package">
                        <a>npm i react-grid-layout</a>
                      </div>
                    </p>
                  </div>
                  <div className="vpu_import_list">
                    <p>
                      <span>
                        <label>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is
                      </span>
                      <div className="vpu_import_item">
                        <a>npm 'react-resizable/css/styles.css';</a>
                        <a>import 'react-grid-layout/css/styles.css';</a>
                      </div>
                    </p>
                  </div>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://github.com/react-grid-layout/react-grid-layout" target="_blank">https://github.com/react-grid-layout/react-grid-layout</a>
                  <a className="visitDoc" href="https://www.npmjs.com/package/react-grid-layout#features" target="_blank">https://www.npmjs.com/package/react-grid-layout#features</a>
                  <a className="visitDoc" href="https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid" target="_blank">https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid</a>
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