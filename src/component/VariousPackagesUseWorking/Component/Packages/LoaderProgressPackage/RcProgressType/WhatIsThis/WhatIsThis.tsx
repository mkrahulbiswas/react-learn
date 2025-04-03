export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>rc progress</b> package to manage the <b>progress bar</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm i rc-progress</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://www.npmjs.com/package/rc-progress" target="_blank">https://www.npmjs.com/package/rc-progress</a></p>
              <p><a className="visitDoc" href="https://github.com/react-component/progress" target="_blank">https://github.com/react-component/progress</a></p>
              <p><a className="visitDoc" href="https://progress-react-component.vercel.app/" target="_blank">https://progress-react-component.vercel.app/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>rc progress</b> is:</span>
          </> : null
      }
    </div>
  )
}