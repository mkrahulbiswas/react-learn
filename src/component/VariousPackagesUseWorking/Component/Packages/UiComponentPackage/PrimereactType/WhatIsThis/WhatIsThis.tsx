export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>prime react</b> package to manage the <b>components & other feature</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install primereact</span></p>
            </span>
            <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <p>import "primereact/resources/themes/lara-light-cyan/theme.css";</p>. There is lots other <b>css theme</b> present, you can see by visit on <b>https://primereact.org/theming/#themes</b>.</span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://github.com/primefaces/primereact" target="_blank">https://github.com/primefaces/primereact</a></p>
              <p><a className="visitDoc" href="https://primereact.org/" target="_blank">https://primereact.org/</a></p>
            </span>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.icons.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">To use primereact <b>icon</b> you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install primeicons</span></p>
            </span>
            <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <b>import 'primeicons/primeicons.css';</b>.</span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://primereact.org/icons/" target="_blank">https://primereact.org/icons/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>prime react</b> is:</span>
          </div> : null
      }
    </div>
  )
}