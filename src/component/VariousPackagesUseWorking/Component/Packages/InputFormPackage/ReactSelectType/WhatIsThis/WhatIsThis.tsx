export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>react select</b> package to manage the <b>log</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <div className="vpu_npm_list">
                    <p>
                      <span>To use this package you need to <b>install</b> the library by using command:</span>
                      <div>
                        <a>npm i --save react-select</a>
                      </div>
                    </p>
                  </div>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://react-select.com/home" target="_blank">https://react-select.com/home</a>
                  <a className="visitDoc" href="https://github.com/JedWatson/react-select" target="_blank">https://github.com/JedWatson/react-select</a>
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