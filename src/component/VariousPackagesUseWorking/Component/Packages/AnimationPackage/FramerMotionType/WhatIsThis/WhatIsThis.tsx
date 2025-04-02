export const WhatIsThis = ({ propsPass }: any) => {
  return (
    <div className="vpu_pi_overview">
      <span className="singleLineText">This is <b>framer motion</b> package to manage the <b>animation</b></span>
      <span className="singleLineText">To use this package you need to <b>install</b> the library by using command:
        <p><span className="npmCommand">npm install motion</span></p>
      </span>
      <span className="singleLineText">For more info you can visit the site:
        <p><a className="visitDoc" href="https://www.npmjs.com/package/motion" target="_blank">https://www.npmjs.com/package/motion</a></p>
        <p><a className="visitDoc" href="https://motion.dev/docs/" target="_blank">https://motion.dev/docs/</a></p>
      </span>
      <span className="singleLineText">Some example of <b>framer motion</b> is:</span>
    </div>
  )
}