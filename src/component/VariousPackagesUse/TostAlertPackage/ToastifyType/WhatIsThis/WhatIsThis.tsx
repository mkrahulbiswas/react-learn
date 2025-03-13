export const WhatIsThis = () => {
  return (
    < >
      <span className="singleLineText">This is <b>tostify</b> package to manage the <b>tost message</b></span>
      <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
        <p><span className="npmCommand">npm install --save react-toastify</span></p>
      </span>
      <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <b>import 'react-toastify/dist/ReactToastify.css';</b></span>
      <span className="singleLineText">For more info you can visit the site:
        <p><a className="visitDoc" href="https://fkhadra.github.io/react-toastify/introduction" target="_blank">https://fkhadra.github.io/react-toastify/introduction</a></p>
        <p><a className="visitDoc" href="https://github.com/fkhadra/react-toastify" target="_blank">https://github.com/fkhadra/react-toastify</a></p>
      </span>
      <span className="singleLineText">Some example of <b>tostify</b> is:</span>
    </>
  )
}