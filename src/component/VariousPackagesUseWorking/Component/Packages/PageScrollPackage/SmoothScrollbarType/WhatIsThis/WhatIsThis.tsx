export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>smooth scrollbar</b> package to manage the <b>log</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <div className="vpu_npm_list">
                    <p>
                      <span>To use this package you need to <b>install</b> the library by using command:</span>
                      <div className="vpu_npm_package">
                        <a>npm install --save-dev smooth-scrollbar @types/smooth-scrollbar</a>
                      </div>
                    </p>
                  </div>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://github.com/idiotWu/smooth-scrollbar/tree/66c67b85d35c14486bd25a73806c0ab13ffeb267/docs" target="_blank">https://github.com/idiotWu/smooth-scrollbar/tree/66c67b85d35c14486bd25a73806c0ab13ffeb267/docs</a>
                  <a className="visitDoc" href="https://idiotwu.github.io/smooth-scrollbar/" target="_blank">https://idiotwu.github.io/smooth-scrollbar/</a>
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