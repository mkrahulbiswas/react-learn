export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>moment js</b> package to manage the <b>date & time</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <p>
                  <span>To use this package you need to <b>install</b> the library by using command:</span>
                  <div>
                    <a>npm install --save moment react-moment</a>
                  </div>
                </p>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://github.com/headzoo/react-moment#readme" target="_blank">https://github.com/headzoo/react-moment#readme</a>
                  <a className="visitDoc" href="https://momentjs.com/" target="_blank">https://momentjs.com/</a>
                </div>
              </li>
              <li>
                <span>Some examples are given bellow:</span>
              </li>
            </ul>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.timezone.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>moment js</b> additional package called <b>timezone</b> package it is used for manage the <b>timezone</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <p>
                  <span>To use <b>timezone</b> related functions need to install:</span>
                  <div>
                    <a>npm install --save moment-timezone</a>
                  </div>
                </p>
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
    </div>
  )
}