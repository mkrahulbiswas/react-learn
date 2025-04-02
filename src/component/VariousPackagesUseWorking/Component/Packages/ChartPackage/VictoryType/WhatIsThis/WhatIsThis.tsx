export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_pi_overview">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>victory charts</b> package to manage the <b>chart</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install --save victory</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://commerce.nearform.com/open-source/victory/" target="_blank">https://commerce.nearform.com/open-source/victory/</a></p>
              <p><a className="visitDoc" href="https://github.com/FormidableLabs/victory" target="_blank">https://github.com/FormidableLabs/victory</a></p>
            </span>
            <span className="singleLineText">Some example of <b>victory charts</b> is:</span>
          </> : null
      }
    </div>
  )
}