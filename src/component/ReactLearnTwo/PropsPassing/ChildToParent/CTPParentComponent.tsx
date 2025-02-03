import { useState } from "react"
function CTPParentComponent() {
  const [userData] = useState<any[]>([]);
  // const [userData, setUserData] = useState<any[]>([]);
  return (
    <div>
      <h1>Fails For Now</h1>
      {/* <CTPChildComponent getData={setUserData} /> */}
      {
        userData.length > 0 ? userData.map((item: any, key: any) =>
          <div key={key}>
            <span>Name: <b>{item.name}</b></span>&nbsp;||&nbsp;
            <span>Class: <b>{item.class}</b></span>
            <hr />
          </div>
        ) : null
      }
    </div>
  )
}
export default CTPParentComponent