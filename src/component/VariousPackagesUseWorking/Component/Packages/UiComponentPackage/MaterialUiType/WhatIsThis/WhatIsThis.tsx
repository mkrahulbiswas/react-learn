export const WhatIsThis = ({ propsPass }: any) => {
  const { loaderData, targetedTab } = propsPass
  return (
    <div className="vpu_ocoplmimotca_list">
      {
        targetedTab === loaderData.packagesUsed.core.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">This is <b>material ui</b> package to manage the <b>components & other feature</b></span>
            <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install @mui/material @emotion/react @emotion/styled</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://mui.com/material-ui/react-grid2/" target="_blank">https://mui.com/material-ui/react-grid2/</a></p>
              <p><a className="visitDoc" href="https://www.npmjs.com/package/@mui/material" target="_blank">https://www.npmjs.com/package/@mui/material</a></p>
            </span>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.icons.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">To use the icon package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install @mui/icons-material</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://mui.com/material-ui/getting-started/installation/" target="_blank">https://mui.com/material-ui/getting-started/installation/</a></p>
            </span>
          </div> : null
      }
      {
        targetedTab === loaderData.packagesUsed.fonts.type ?
          <div className='vpu_ocoplmimotca_item'>
            <span className="singleLineText">To use the font package you need to <b>install</b> the library by using command:
              <p><span className="npmCommand">npm install @fontsource/roboto</span></p>
            </span>
            <span className="singleLineText">For more info you can visit the site:
              <p><a className="visitDoc" href="https://mui.com/material-ui/getting-started/installation/" target="_blank">https://mui.com/material-ui/getting-started/installation/</a></p>
            </span>
            <span className="singleLineText">Some example of <b>material ui</b> is:</span>
          </div> : null
      }
    </div>
  )
}