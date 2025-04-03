export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>react scroll</b> package to manage the <b>scroll</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm i react-scroll @types/react-scroll --save</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://github.com/fisshy/react-scroll" target="_blank">https://github.com/fisshy/react-scroll</a></p>
              <p><a className="visitDoc" href="https://www.npmjs.com/package/react-scroll#run" target="_blank">https://www.npmjs.com/package/react-scroll#run</a></p>
            </span>
            <span className="singleLineText">Some example of <b>react scroll</b> is:</span>
          </div> : null
      }
    </div>
  )
}