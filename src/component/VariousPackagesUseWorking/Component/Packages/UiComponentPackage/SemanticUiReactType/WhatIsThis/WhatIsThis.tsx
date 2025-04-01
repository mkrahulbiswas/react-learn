export const WhatIsThis = ({ propsPass }: any) => {
  return (
    <div className="vpu_pi_overview">
      <span className="singleLineText">This is <b>Semantic Ui React</b> package to manage the <b>components & other feature</b></span>
      <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
        <p><span className="npmCommand">npm install semantic-ui-react semantic-ui-css</span></p>
      </span>
      <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <p>import 'semantic-ui-css/semantic.min.css'</p></span>
      <span className="singleLineText">For more info you can visit the site:
        <p><a className="visitDoc" href="https://www.npmjs.com/package/semantic-ui-react?activeTab=readme" target="_blank">https://www.npmjs.com/package/semantic-ui-react?activeTab=readme</a></p>
        <p><a className="visitDoc" href="https://github.com/Semantic-Org/Semantic-UI-React#readme" target="_blank">https://github.com/Semantic-Org/Semantic-UI-React#readme</a></p>
        <p><a className="visitDoc" href="https://react.semantic-ui.com/" target="_blank">https://react.semantic-ui.com/</a></p>
      </span>
      <span className="singleLineText">Some example of <b>Semantic Ui React</b> is:</span>
    </div>
  )
}