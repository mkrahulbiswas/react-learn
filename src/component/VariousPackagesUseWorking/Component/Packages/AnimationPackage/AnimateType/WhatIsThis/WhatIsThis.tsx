export const WhatIsThis = () => {
  return (
    <div className="vpu_pi_overview">
      <span className="singleLineText">This is <b>animate</b> package to manage the <b>animation</b></span>
      <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
        <p><span className="npmCommand">npm install animate.css --save</span></p>
      </span>
      <span className="singleLineText"><label style={{ color: 'red' }}>Note:</label> after install package you need to <b>import</b> css path to <b>main.ts / app.ts / in the targeted file</b>. The css path is <b>import 'animate.css';</b></span>
      <span className="singleLineText">For more info you can visit the site:
        <p><a className="visitDoc" href="https://animate.style/" target="_blank" >https://animate.style/</a></p>
        <p><a className="visitDoc" href="https://github.com/animate-css/animate.css" target="_blank" >https://github.com/animate-css/animate.css</a></p>
      </span>
      <span className="singleLineText">Some example of <b>animate</b> is:</span>
    </div>
  )
}