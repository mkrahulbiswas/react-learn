export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>react paginate</b> package to manage the <b>pagination</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install react-loader-spinner --save</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://github.com/AdeleD/react-paginate" target="_blank">https://github.com/AdeleD/react-paginate</a></p>
              <p><a className="visitDoc" href="https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js" target="_blank">https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js</a></p>
            </span>
            <span className="singleLineText">Some example of <b>react paginate</b> is:</span>
          </div> : null
      }
    </div>
  )
}