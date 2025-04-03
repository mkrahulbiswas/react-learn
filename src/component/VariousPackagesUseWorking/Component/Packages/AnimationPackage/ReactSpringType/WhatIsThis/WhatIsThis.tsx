export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>react spring</b> package to manage the <b>animation</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command
              <p><span className="npmCommand">npm add @react-spring/web</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://www.react-spring.dev/" target="_blank">https://www.react-spring.dev/</a></p>
              <p><a className="visitDoc" href="https://www.npmjs.com/package/react-spring" target="_blank">https://www.npmjs.com/package/react-spring</a></p>
            </span>
            <span className="singleLineText">Some example of <b>react spring</b> is:</span>
          </div> : null
      }
    </div>
  )
}