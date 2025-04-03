export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>apex charts</b> package to manage the <b>chart</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install --save react-apexcharts apexcharts</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://www.npmjs.com/package/react-apexcharts" target="_blank">https://www.npmjs.com/package/react-apexcharts</a></p>
              <p><a className="visitDoc" href="https://www.apexcharts.com/" target="_blank">https://www.apexcharts.com/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>apex charts</b> is:</span>
          </div> : null
      }
    </div>
  )
}