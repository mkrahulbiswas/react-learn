export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>spectrum</b> package to manage the <b>components & other feature</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install @adobe/react-spectrum --save</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://react-spectrum.adobe.com/react-spectrum/index.html" target="_blank">https://react-spectrum.adobe.com/react-spectrum/index.html</a></p>
              <p><a className="visitDoc" href="https://github.com/adobe/react-spectrum/tree/main" target="_blank">https://github.com/adobe/react-spectrum/tree/main</a></p>
            </span>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.icons.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">To use icon package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install @spectrum-icons/workflow --save</span></p>
            </span>
            <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need wrap the <b>targeted component</b> into <b>Provider</b> wrapper.</span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://react-spectrum.adobe.com/react-spectrum/index.html" target="_blank">https://react-spectrum.adobe.com/react-spectrum/index.html</a></p>
              <p><a className="visitDoc" href="https://github.com/adobe/react-spectrum/tree/main" target="_blank">https://github.com/adobe/react-spectrum/tree/main</a></p>
            </span>
            <span className="singleLineText">Some example of <b>spectrum</b> is:</span>
          </div> : null
      }
    </div>
  )
}