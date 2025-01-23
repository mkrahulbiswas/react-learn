import { PJPChildComponentOne, PJPChildComponentTwo } from "./PJPChildComponent"

function PJPParentComponent() {
  let userData = [
    {
      name: 'Rahul Biswas',
      roll: '11',
    }, {
      name: 'Arpita Biswas',
      roll: '22',
    }
  ]
  return (
    <div>
      <span>Type one pass <b>JSX</b> html as <b>PROPS</b></span>
      {
        userData.map((item, key) =>
          <PJPChildComponentOne
            key={key}
            userData={item}
            message={
              <div>
                <strong>Welcome to student listing</strong>
              </div>
            } />
        )
      }
      <hr />
      <span>Type one pass <b>Inside JSX element</b> html</span>
      {
        userData.map((item, key) =>
          <PJPChildComponentTwo
            key={key}
            userData={item}
            message={
              <div>
                <strong>Welcome to student listing</strong>
              </div>
            } >
            <button type="button">
              <i>This is button</i>
            </button>
          </PJPChildComponentTwo>
        )
      }
    </div>
  )
}
export default PJPParentComponent