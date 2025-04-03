export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>recharts</b> package to manage the <b>chart</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install recharts</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://recharts.org/en-US" target="_blank">https://recharts.org/en-US</a></p>
              <p><a className="visitDoc" href="https://github.com/recharts/recharts" target="_blank">https://github.com/recharts/recharts</a></p>
            </span>
            <span className="singleLineText">Some example of <b>recharts</b> is:</span>
          </> : null
      }
    </div>
  )
}