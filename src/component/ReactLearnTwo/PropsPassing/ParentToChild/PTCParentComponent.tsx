import PTCChildComponent from "./PTCChildComponent"
function PTCParentComponent() {
  let userData = [
    {
      name: 'Rahul Biswas',
      class: '10',
    }, {
      name: 'Arpita Biswas',
      class: '20',
    }
  ]
  return (
    <div>
      <span><b>Parent to child</b> data passing</span>
      {
        userData.map((item, key) => <PTCChildComponent key={key} userData={item} />)
      }
      <hr />
    </div>
  )
}

export default PTCParentComponent