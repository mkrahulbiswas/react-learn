export const WhatIsThis = ({ propsPass }: any) => {
  return (
    <div className="vpu_pi_overview">
      <span className="singleLineText">This is <b>faker js</b> package to manage the <b>fake data</b></span>
      <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
        <p><span className="npmCommand">npm install @faker-js/faker --save-dev</span></p>
      </span>
      <span className="singleLineText">For more info you can visit the site:
        <p><a className="visitDoc" href="https://github.com/faker-js/faker" target="_blank">https://github.com/faker-js/faker</a></p>
        <p><a className="visitDoc" href="https://fakerjs.dev/" target="_blank">https://fakerjs.dev/</a></p>
      </span>
      <span className="singleLineText">Some example of <b>faker js</b> is:</span>
    </div>
  )
}