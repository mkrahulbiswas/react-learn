export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>react top loading bar</b> package to manage the <b>top loading bar</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm i react-top-loading-bar</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://klendi.github.io/react-top-loading-bar/" target="_blank">https://klendi.github.io/react-top-loading-bar/</a></p>
              <p><a className="visitDoc" href="https://github.com/klendi/react-top-loading-bar" target="_blank">https://github.com/klendi/react-top-loading-bar</a></p>
            </span>
            <span className="singleLineText">Some example of <b>react top loading bar</b> is:</span>
          </> : null
      }
    </div>
  )
}