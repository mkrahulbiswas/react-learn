export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>chakra ui</b> package to manage the <b>components & other feature</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm i @chakra-ui/react @emotion/react</span></p>
            </span>
            <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need wrap the <b>targeted component</b> into <b>ChakraProvider</b> wrapper.</span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://chakra-ui.com/" target="_blank">https://chakra-ui.com/</a></p>
              <p><a className="visitDoc" href="https://github.com/chakra-ui/chakra-ui" target="_blank">https://github.com/chakra-ui/chakra-ui</a></p>
              <p><a className="visitDoc" href="https://www.npmjs.com/package/@chakra-ui/react" target="_blank">https://www.npmjs.com/package/@chakra-ui/react</a></p>
            </span>
            <span className="singleLineText">Some example of <b>chakra ui</b> is:</span>
          </div> : null
      }
    </div>
  )
}