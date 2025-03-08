import { useState } from "react";

function IfElseCondition() {
  const [testCase1] = useState(true)
  let testCase2: any = 1
  function callFun(data: any): any {
    let updateText: any = 'No user found'
    if (data == 1) {
      updateText = "User " + data + " found"
    } else if (data == 2) {
      updateText = "User " + data + " found"
    } else if (data == 3) {
      updateText = "User " + data + " found"
    } else {
      updateText = "No user found"
    }
    return updateText
  }
  return (
    <div>
      {testCase1 ? <h1>User found</h1> : <h1>No user found</h1>}
      {testCase2 == 1 ? <h1>User 1 found</h1> : testCase2 == 2 ? <h1>User 2 found</h1> : <h1>User 3 found</h1>}
      <h1>{callFun(testCase2)}</h1>
    </div>
  )
}

export default IfElseCondition
