export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>react loader spinner</b> package to manage the <b>loader</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install react-loader-spinner --save</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://mhnpd.github.io/react-loader-spinner/" target="_blank">https://mhnpd.github.io/react-loader-spinner/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>react loader spinner</b> is:</span>
          </> : null
      }
    </div>
  )
}