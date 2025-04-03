export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>spinners react</b> package to manage the <b>loader</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">$ npm install spinners-react</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://adexin.github.io/spinners/" target="_blank">https://adexin.github.io/spinners/</a></p>
              <p><a className="visitDoc" href="https://github.com/adexin/spinners-react" target="_blank">https://github.com/adexin/spinners-react</a></p>
            </span>
            <span className="singleLineText">Some example of <b>spinners react</b> is:</span>
          </div> : null
      }
    </div>
  )
}