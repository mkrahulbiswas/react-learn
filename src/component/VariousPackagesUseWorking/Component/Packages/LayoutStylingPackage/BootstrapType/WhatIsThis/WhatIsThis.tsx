export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>bootstrap class</b> package to manage the <b>class</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install bootstrap</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">https://getbootstrap.com/docs/5.3/getting-started/introduction/</a></p>
              <p><a className="visitDoc" href="https://getbootstrap.com/" target="_blank">https://getbootstrap.com/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>bootstrap class</b> is:</span>
          </div> : null
      }
    </div>
  )
}