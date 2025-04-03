export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>fluent ui</b> package to manage the <b>components & other feature</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm add @fluentui/react-components @fluentui/react-datepicker-compat</span></p>
            </span>
            <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need wrap the <b>targeted component</b> into <b>FluentProvider</b> wrapper.</span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://github.com/microsoft/fluentui" target="_blank">https://github.com/microsoft/fluentui</a></p>
              <p><a className="visitDoc" href="https://react.fluentui.dev/?path=/docs/concepts-introduction--docs" target="_blank">https://react.fluentui.dev/?path=/docs/concepts-introduction--docs</a></p>
              <p><a className="visitDoc" href="https://www.npmjs.com/package/office-ui-fabric-react" target="_blank">https://www.npmjs.com/package/office-ui-fabric-react</a></p>
            </span>
            <span className="singleLineText">Some example of <b>fluent ui</b> is:</span>
          </div> : null
      }
    </div>
  )
}