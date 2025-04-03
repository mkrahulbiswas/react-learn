export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>react chart js</b> package to manage the <b>chart</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install --save chart.js react-chartjs-2</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://react-chartjs-2.js.org/examples/vertical-bar-chart/" target="_blank" >https://react-chartjs-2.js.org/examples/vertical-bar-chart/</a></p>
              <p><a className="visitDoc" href="https://www.npmjs.com/package/react-chartjs-2?activeTab=readme" target="_blank" >https://www.npmjs.com/package/react-chartjs-2?activeTab=readme</a></p>
              <p><a className="visitDoc" href="https://github.com/reactchartjs/react-chartjs-2" target="_blank" >https://github.com/reactchartjs/react-chartjs-2</a></p>
            </span>
            <span className="singleLineText">Some example of <b>react chart js</b> is:</span>
          </> : null
      }
    </div>
  )
}