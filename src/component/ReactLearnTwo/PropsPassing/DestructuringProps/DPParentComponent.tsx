import { DPChildComponentFive, DPChildComponentFour, DPChildComponentOne, DPChildComponentSeven, DPChildComponentSix, DPChildComponentThree, DPChildComponentTwo } from "./DPChildComponent"

function DPParentComponent() {
  let userData = [
    {
      name: 'Rahul Biswas',
      roll: '10',
    }, {
      name: 'Arpita Biswas',
      roll: '20',
    }
  ]
  return (
    <div>
      <span><b>Destructing</b> type one</span><br />
      {
        userData.map((item, key) => <DPChildComponentOne key={key} userData={item} />)
      }

      <hr />
      <span><b>Destructing</b> type two</span><br />
      {
        userData.map((item, key) => <DPChildComponentTwo key={key} userData={item} />)
      }

      <hr />
      <span><b>Destructing</b> type three</span><br />
      {
        userData.map((item, key) => <DPChildComponentThree key={key} userData={item} />)
      }

      <hr />
      <span><b>Destructing</b> type four</span><br />
      {
        userData.map((item, key) => <DPChildComponentFour key={key} userData={item} />)
      }

      <hr />
      <span><b>Destructing</b> type Five</span><br />
      {
        userData.map((item, key) =>
          <DPChildComponentFive
            key={key}
            userData={item}
            message={
              <div style={{ backgroundColor: 'lightgray' }}>
                <span>Hey <b>{item.name}</b>, welcome to my world</span>
              </div>
            } />
        )
      }

      <hr />
      <span><b>Destructing</b> type Six</span><br />
      {
        userData.map((item, key) =>
          <DPChildComponentSix
            key={key}
            userData={item}
            message={
              <div style={{ backgroundColor: 'lightpink' }}>
                <span>Hey <b>{item.name}</b>, welcome to my world</span>
              </div>
            } />
        )
      }

      <hr />
      <span><b>Destructing</b> type Six</span><br />
      {
        userData.map((item, key) =>
          <DPChildComponentSeven
            key={key}
            userData={item}
            message={
              <div style={{ backgroundColor: 'lightyellow' }}>
                <span>Hey <b>{item.name}</b>, welcome to my world</span>
              </div>
            } >
            <button type="button">
              <i>This is button</i>
            </button>
          </DPChildComponentSeven>
        )
      }
    </div>
  )
}
export default DPParentComponent