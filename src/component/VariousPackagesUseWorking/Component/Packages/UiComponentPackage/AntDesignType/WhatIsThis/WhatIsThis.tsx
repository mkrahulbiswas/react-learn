export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>ant design</b> package to manage the <b>components & other feature</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install antd antd-style @ant-design/icons --save</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://www.npmjs.com/package/antd" target="_blank">https://www.npmjs.com/package/antd</a></p>
              <p><a className="visitDoc" href="https://github.com/ant-design/ant-design" target="_blank">https://github.com/ant-design/ant-design</a></p>
              <p><a className="visitDoc" href="https://ant.design/" target="_blank">https://ant.design/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>ant design</b> is:</span>
          </div> : null
      }
    </div>
  )
}