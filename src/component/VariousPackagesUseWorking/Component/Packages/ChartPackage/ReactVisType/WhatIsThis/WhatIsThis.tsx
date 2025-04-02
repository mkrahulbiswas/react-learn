export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_pi_overview">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>react vis</b> package to manage the <b>chart</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm i --save react-vis --force</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://uber.github.io/react-vis/" target="_blank">https://uber.github.io/react-vis/</a></p>
              <p><a className="visitDoc" href="https://github.com/uber/react-vis" target="_blank">https://github.com/uber/react-vis</a></p>
            </span>
            <span className="singleLineText">Some example of <b>react vis</b> is:</span>
          </> : null
      }
    </div>
  )
}