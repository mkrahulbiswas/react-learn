export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>chakra ui</b> package to manage the <b>components & other feature</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <p>
                  <span>To use this package you need to <b>install</b> the library by using command:</span>
                  <div>
                    <a>npm i @chakra-ui/react @emotion/react</a>
                  </div>
                </p>
                <p>
                  <span>
                    <label>Note:</label> after install package you need wrap the <b>targeted component</b> into <b>ChakraProvider</b> wrapper.
                  </span>
                </p>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://chakra-ui.com/" target="_blank">https://chakra-ui.com/</a>
                  <a className="visitDoc" href="https://github.com/chakra-ui/chakra-ui" target="_blank">https://github.com/chakra-ui/chakra-ui</a>
                  <a className="visitDoc" href="https://www.npmjs.com/package/@chakra-ui/react" target="_blank">https://www.npmjs.com/package/@chakra-ui/react</a>
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