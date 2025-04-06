export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>react top loading bar</b> package to manage the <b>top loading bar</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <p className="vpu_npm_list">
                    <span>To use this package you need to <b>install</b> the library by using command:</span>
                    <div>
                      <a>npm i react-top-loading-bar</a>
                    </div>
                  </p>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://klendi.github.io/react-top-loading-bar/" target="_blank">https://klendi.github.io/react-top-loading-bar/</a>
                  <a className="visitDoc" href="https://github.com/klendi/react-top-loading-bar" target="_blank">https://github.com/klendi/react-top-loading-bar</a>
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