export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>react paginate</b> package to manage the <b>pagination</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <div className="vpu_npm_list">
                    <p>
                      <span>To use this package you need to <b>install</b> the library by using command:</span>
                      <div className="vpu_npm_package">
                        <a>npm install react-loader-spinner --save</a>
                      </div>
                    </p>
                  </div>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://github.com/AdeleD/react-paginate" target="_blank">https://github.com/AdeleD/react-paginate</a>
                  <a className="visitDoc" href="https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js" target="_blank">https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js</a>
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