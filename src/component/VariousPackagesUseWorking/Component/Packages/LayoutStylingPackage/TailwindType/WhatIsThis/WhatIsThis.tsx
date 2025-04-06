export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>tailwind css</b> package to manage the <b>class</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <div className="vpu_npm_list">
                    <p>
                      <span>To use this package you need to <b>install</b> the library by using command:</span>
                      <div>
                        <a>npm install tailwindcss @tailwindcss/vite</a>
                      </div>
                    </p>
                  </div>
                  <div className="vpu_import_list">
                    <p>
                      <span>
                        <label>Note:</label> After install the package you need to do some steps to start <b>tailwind</b>
                        <p>First you need to put <b>@import "tailwindcss";</b> this inside root css file at the top <b>index.css / app.css / in the targeted</b> css file</p>
                      </span>
                      <div className="vpu_import_item">
                        <a>@import "tailwindcss";</a>
                      </div>
                    </p>
                    <p>
                      <span>
                        <p>Second you need to put <b>tailwindcss()</b> this inside <b>vite.config.ts</b> file which is present in <b>root</b> of the project. Also, import the path in the <b>same</b> file at the top: <b>import tailwindcss from '@tailwindcss/vite'</b>.</p>
                      </span>
                      <div className="vpu_import_item">
                        <a>npm tailwindcss from '@tailwindcss/vite';</a>
                      </div>
                    </p>
                  </div>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://tailwindcss.com/" target="_blank">https://tailwindcss.com/</a>
                  <a className="visitDoc" href="https://tailwindcss.com/docs/installation/using-vite" target="_blank">https://tailwindcss.com/docs/installation/using-vite</a>
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