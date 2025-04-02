export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <>
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>sweet alert</b> package to manage the <b>alert</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">$ npm i sweetalert2</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://sweetalert2.github.io/" target="_blank">https://sweetalert2.github.io/</a></p>
              <p><a className="visitDoc" href="https://github.com/kessejones/react-sweetalert2#readme" target="_blank">https://github.com/kessejones/react-sweetalert2#readme</a></p>
            </span>
            <span className="singleLineText">Some example of <b>sweet alert</b> is:</span>
          </> : null
      }
    </>
  )
}