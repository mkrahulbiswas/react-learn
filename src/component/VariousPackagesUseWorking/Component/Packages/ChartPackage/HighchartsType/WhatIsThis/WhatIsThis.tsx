export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>highcharts</b> package to manage the <b>chart</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install highcharts highcharts-react-official</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://www.npmjs.com/package/highcharts-react-official" target="_blank">https://www.npmjs.com/package/highcharts-react-official</a></p>
              <p><a className="visitDoc" href="https://github.com/highcharts/highcharts-react" target="_blank">https://github.com/highcharts/highcharts-react</a></p>
              <p><a className="visitDoc" href="https://www.highcharts.com/" target="_blank">https://www.highcharts.com/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>highcharts</b> is:</span>
          </> : null
      }
    </div>
  )
}