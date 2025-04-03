export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>anime js</b> package to manage the <b>animation</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install --save-dev @types/animejs animejs</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://animejs.com/" target="_blank">https://animejs.com/</a></p>
              <p><a className="visitDoc" href="https://www.npmjs.com/package/animejs" target="_blank">https://www.npmjs.com/package/animejs</a></p>
            </span>
            <span className="singleLineText">Some example of <b>anime js</b> is:</span>
          </div> : null
      }
    </div>
  )
}