import React from "react"

function WithoutJSX() {
  // return React.createElement('h1', '', 'This Is Rahul')
  return React.createElement('h1', '', React.createElement('h1', '', 'Hello Rahul 2'))
}

export default WithoutJSX
