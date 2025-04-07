import anime from "animejs";

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <TypeOne />
      <TypeTwo />
    </div>
  )
}

export const TypeOne = () => {
  anime({
    targets: '.typeOne',
    translateX: 250
  });
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <div className="typeOne">Anime Js</div>
        </div>
      </div >
    </>
  )
}

export const TypeTwo = () => {
  anime({
    targets: '.TypeThree',
    innerHTML: [0, 10000],
    easing: 'linear',
    round: 10
  });
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <div className="TypeThree">Anime Js</div>
        </div>
      </div >
    </>
  )
}