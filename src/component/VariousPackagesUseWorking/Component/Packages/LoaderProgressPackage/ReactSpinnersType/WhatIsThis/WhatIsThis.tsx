export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <>
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>react spinners</b> package to manage the <b>loader</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install react-spinners --save</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://github.com/davidhu2000/react-spinners" target="_blank">https://github.com/davidhu2000/react-spinners</a></p>
              <p><a className="visitDoc" href="https://www.davidhu.io/react-spinners/" target="_blank">https://www.davidhu.io/react-spinners/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>react spinners</b> is:</span>
          </> : null
      }
    </>
  )
}