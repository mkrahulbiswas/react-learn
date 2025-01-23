export default function LoopingInJsx() {
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
    <>
      <p>Looping In Jsx type One: </p><br />
      {
        userData.map((item, key) => {
          return (
            <div key={key}>
              <span>Name: <b>{item.name}</b></span><br />
              <span>Class: <b>{item.class}</b></span><br />
            </div>
          )
        })
      }
      <hr />

      <p>Looping In Jsx type Two: </p><br />
      {
        userData.map((item, key) =>
          <div key={key}>
            <span>Name: <b>{item.name}</b></span><br />
            <span>Class: <b>{item.class}</b></span><br />
          </div>
        )
      }
      <hr />
    </>
  )
}