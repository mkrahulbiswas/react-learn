export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <>
            <span className="singleLineText">This is <b>smooth scrollbar</b> package to manage the <b>log</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install --save-dev smooth-scrollbar @types/smooth-scrollbar</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://github.com/idiotWu/smooth-scrollbar/tree/66c67b85d35c14486bd25a73806c0ab13ffeb267/docs" target="_blank">https://github.com/idiotWu/smooth-scrollbar/tree/66c67b85d35c14486bd25a73806c0ab13ffeb267/docs</a></p>
              <p><a className="visitDoc" href="https://idiotwu.github.io/smooth-scrollbar/" target="_blank">https://idiotwu.github.io/smooth-scrollbar/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>smooth scrollbar</b> is:</span>
          </> : null
      }
    </div>
  )
}