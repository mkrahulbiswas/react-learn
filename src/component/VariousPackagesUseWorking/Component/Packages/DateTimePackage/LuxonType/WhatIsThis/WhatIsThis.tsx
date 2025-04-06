export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>luxon</b> package to manage the <b>date and time</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <p className="vpu_npm_list">
                    <span>There a new updated version of moment js is <b>luxon</b>. To use it need to install:</span>
                    <div>
                      <a>npm install luxon</a>
                      <a>npm install --save-dev @types/luxon</a>
                    </div>
                  </p>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://moment.github.io/luxon/#/" target="_blank">https://moment.github.io/luxon/#/</a>
                  <a className="visitDoc" href="https://github.com/moment/luxon" target="_blank">https://github.com/moment/luxon</a>
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