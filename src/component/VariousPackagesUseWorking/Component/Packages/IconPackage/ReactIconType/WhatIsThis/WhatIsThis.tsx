export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <>
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>react icon</b> package to manage the <b>icons</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install react-icons --save</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://react-icons.github.io/react-icons/" target="_blank">https://react-icons.github.io/react-icons/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>react icon</b> is:</span>
          </> : null
      }
    </>
  )
}