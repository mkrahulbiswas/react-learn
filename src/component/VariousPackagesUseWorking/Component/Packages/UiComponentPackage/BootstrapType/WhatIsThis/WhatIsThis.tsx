export const WhatIsThis = () => {
  return (
    <div className="vpu_pi_overview">
      <span className="singleLineText">This is <b>bootstrap</b> package to manage the <b>bootstrap class</b></span>
      <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
        <p><span className="npmCommand">npm install bootstrap</span></p>
      </span>
      <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css & js path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <b>import 'bootstrap/dist/css/bootstrap.min.css';</b> and js path <b>import 'bootstrap/dist/js/bootstrap.bundle.js';</b></span>
      <span className="singleLineText">For more info you can visit the site:
        <p><a className="visitDoc" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">https://getbootstrap.com/docs/5.3/getting-started/introduction/</a></p>
      </span>
      <span className="singleLineText">Some example of <b>bootstrap</b> is:</span>
    </div>
  )
}