export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <>
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>moment js</b> package to manage the <b>date & time</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install --save moment react-moment</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://github.com/headzoo/react-moment#readme" target="_blank">https://github.com/headzoo/react-moment#readme</a></p>
              <p><a className="visitDoc" href="https://momentjs.com/" target="_blank">https://momentjs.com/</a></p>
            </span>
          </> : null
      }
      {
        targetedTab === loaderData.packagesUsed.timezone.type ?
          <>
            <span className="singleLineText">To use <b>timezone</b> related functions need to install:
              <p><span className="npmCommand">npm install --save moment-timezone</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://momentjs.com/timezone/" target="_blank">https://momentjs.com/timezone/</a></p>
            </span>
          </> : null
      }
    </>
  )
}