export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>react grid layout</b> package to manage the <b>grid layout</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm i react-grid-layout</span></p>
            </span>
            <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <b>import 'react-resizable/css/styles.css';</b> and <b>import 'react-grid-layout/css/styles.css';</b></span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://github.com/react-grid-layout/react-grid-layout" target="_blank">https://github.com/react-grid-layout/react-grid-layout</a></p>
              <p><a className="visitDoc" href="https://www.npmjs.com/package/react-grid-layout#features" target="_blank">https://www.npmjs.com/package/react-grid-layout#features</a></p>
              <p><a className="visitDoc" href="https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid" target="_blank">https://www.dhiwise.com/post/react-grid-layout-building-visually-stunning-web-grid</a></p>
            </span>
            <span className="singleLineText">Some example of <b>react grid layout</b> is:</span>
          </div> : null
      }
    </div>
  )
}