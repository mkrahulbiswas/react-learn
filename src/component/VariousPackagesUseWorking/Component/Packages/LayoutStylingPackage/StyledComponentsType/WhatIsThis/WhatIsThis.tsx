export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>styled component</b> package to manage the <b>css</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install styled-components</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://github.com/styled-components/styled-components" target="_blank">https://github.com/styled-components/styled-components</a></p>
              <p><a className="visitDoc" href="https://styled-components.com/" target="_blank">https://styled-components.com/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>styled component</b> is:</span>
          </> : null
      }
    </div>
  )
}