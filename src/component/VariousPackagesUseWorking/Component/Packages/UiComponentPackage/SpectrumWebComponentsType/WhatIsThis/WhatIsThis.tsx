export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>spectrum</b> package to manage the <b>components & other feature</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <p>
                  <span>To use this package you need to <b>install</b> the library by using command:</span>
                  <div className="vpu_npm_list">
                    <a>npm install @adobe/react-spectrum --save</a>
                  </div>
                </p>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://react-spectrum.adobe.com/react-spectrum/index.html" target="_blank">https://react-spectrum.adobe.com/react-spectrum/index.html</a>
                  <a className="visitDoc" href="https://github.com/adobe/react-spectrum/tree/main" target="_blank">https://github.com/adobe/react-spectrum/tree/main</a>
                </div>
              </li>
              <li>
                <span>Some examples are given bellow:</span>
              </li>
            </ul>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.icons.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>spectrum</b> additional package called <b>icons</b> package it is used for manage the <b>icons</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <p>
                  <span>To use icon package you need to <b>install</b> the library by using command:</span>
                  <div className="vpu_npm_list">
                    <a>npm install @spectrum-icons/workflow --save</a>
                  </div>
                </p>
                <p>
                  <span>
                    <label>Note:</label> after install package you need wrap the <b>targeted component</b> into <b>Provider</b> wrapper.
                  </span>
                </p>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://react-spectrum.adobe.com/react-spectrum/index.html" target="_blank">https://react-spectrum.adobe.com/react-spectrum/index.html</a>
                  <a className="visitDoc" href="https://github.com/adobe/react-spectrum/tree/main" target="_blank">https://github.com/adobe/react-spectrum/tree/main</a>
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