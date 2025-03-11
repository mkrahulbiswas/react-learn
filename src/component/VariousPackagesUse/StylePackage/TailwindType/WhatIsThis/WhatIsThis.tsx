export const WhatIsThis = () => {
  return (
    < >
      <span className="singleLineText">This is <b>tailwind css</b> package to manage the <b>class</b></span>
      <span className="singleLineText">To use this package you need to <b>install</b> the library by using command <b>npm install tailwindcss @tailwindcss/vite</b></span>
      <span className="singleLineText">After install the package you need to do some steps to start <b>tailwind</b>.
        <p>First you need to put <b>@import "tailwindcss";</b> this inside root css file at the top <b>(index.css / app.css)</b> or in <b>targeted</b> css file</p>
        <p>Second you need to put <b>tailwindcss()</b> this inside <b>vite.config.ts</b> file which is present in <b>root</b> of the project. Also, import the path in the <b>same</b> file at the top: <b>import tailwindcss from '@tailwindcss/vite'</b>.</p>
      </span>
      <span className="singleLineText">For more info you can visit the site <b>https://tailwindcss.com/</b> or <b>https://tailwindcss.com/docs/installation/using-vite</b></span>
      <span className="singleLineText">Some example of <b>tailwind css</b> is:</span>
    </>
  )
}