export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>fluent ui</b> package to manage the <b>components & other feature</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <div className="vpu_npm_list">
                    <p>
                      <span>To use this package you need to <b>install</b> the library by using command:</span>
                      <div className="vpu_npm_package">
                        <a>npm add @fluentui/react-components @fluentui/react-datepicker-compat</a>
                      </div>
                    </p>
                  </div>
                  <div className="vpu_import_list">
                    <p>
                      <span>
                        <label>Note:</label> after install package you need wrap the <b>targeted component</b> into <b>FluentProvider</b> wrapper.
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://github.com/microsoft/fluentui" target="_blank">https://github.com/microsoft/fluentui</a>
                  <a className="visitDoc" href="https://react.fluentui.dev/?path=/docs/concepts-introduction--docs" target="_blank">https://react.fluentui.dev/?path=/docs/concepts-introduction--docs</a>
                  <a className="visitDoc" href="https://www.npmjs.com/package/office-ui-fabric-react" target="_blank">https://www.npmjs.com/package/office-ui-fabric-react</a>
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