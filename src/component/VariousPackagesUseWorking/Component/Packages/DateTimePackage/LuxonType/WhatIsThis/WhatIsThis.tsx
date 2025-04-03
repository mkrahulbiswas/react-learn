export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">There a new updated version of moment js is <b>luxon</b>. To use it need to install:
              <p><span className="npmCommand">npm install luxon</span></p>
              <p><span className="npmCommand">npm install --save-dev @types/luxon</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://moment.github.io/luxon/#/" target="_blank">https://moment.github.io/luxon/#/</a></p>
              <p><a className="visitDoc" href="https://github.com/moment/luxon" target="_blank">https://github.com/moment/luxon</a></p>
            </span>
            <span className="singleLineText">Some example of <b>moment js</b> and <b>luxon</b> is:</span>
          </> : null
      }
    </div>
  )
}