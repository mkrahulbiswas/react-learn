export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <ul>
              <li className="vpu_ocoplmimotcai_heading">
                <span>This is <b>react chart js</b> package to manage the <b>chart</b></span>
              </li>
              <li className="vpu_ocoplmimotcai_npm">
                <div className="vpu_ocoplmimotcain_main">
                  <p className="vpu_npm_list">
                    <span>To use this package you need to <b>install</b> the library by using command:</span>
                    <div>
                      <a>npm install --save chart.js react-chartjs-2</a>
                    </div>
                  </p>
                </div>
              </li>
              <li className="vpu_ocoplmimotcai_site">
                <span className="singleLineText">For more info you can visit the site:</span>
                <div>
                  <a className="visitDoc" href="https://react-chartjs-2.js.org/examples/vertical-bar-chart/" target="_blank" >https://react-chartjs-2.js.org/examples/vertical-bar-chart/</a>
                  <a className="visitDoc" href="https://www.npmjs.com/package/react-chartjs-2?activeTab=readme" target="_blank" >https://www.npmjs.com/package/react-chartjs-2?activeTab=readme</a>
                  <a className="visitDoc" href="https://github.com/reactchartjs/react-chartjs-2" target="_blank" >https://github.com/reactchartjs/react-chartjs-2</a>
                </div>
              </li>
              <li>
                <span>Some examples are given bellow:</span>
              </li>
            </ul>
          </div> : null
      }
    </div >
  )
}