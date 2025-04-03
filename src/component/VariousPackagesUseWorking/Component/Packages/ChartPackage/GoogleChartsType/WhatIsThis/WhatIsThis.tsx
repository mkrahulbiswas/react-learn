export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>google charts</b> package to manage the <b>chart</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install --save react-google-charts</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://developers-dot-devsite-v2-prod.appspot.com/chart" target="_blank">https://developers-dot-devsite-v2-prod.appspot.com/chart</a></p>
              <p><a className="visitDoc" href="https://www.react-google-charts.com/" target="_blank">https://www.react-google-charts.com/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>google charts</b> is:</span>
          </> : null
      }
    </div>
  )
}