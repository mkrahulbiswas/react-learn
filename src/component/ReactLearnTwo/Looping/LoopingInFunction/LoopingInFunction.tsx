export default function LoopingInFunction() {
  const userData: any = [
    {
      name: 'Rahul Biswas',
      class: '10',
    }, {
      name: 'Arpita Biswas',
      class: '20',
    }
  ]

  function loopingTypeOne() {
    let data = ''
    userData.forEach((element: any) => {
      data += element.name + ', '
    });
    return data
  }

  function loopingTypeTwo() {
    let data = ''
    for (let i = 0; i < userData.length; i++) {
      // data += i + ', '
      data += userData[i].class + ', '
    }
    return data
  }

  return (
    <>
      <p>Looping In Function type one</p><br />
      <span>Name: <b>{loopingTypeOne()}</b></span>
      <hr />
      <p>Looping In Function type Two</p><br />
      <span>Class: <b>{loopingTypeTwo()}</b></span>
    </>
  )
}