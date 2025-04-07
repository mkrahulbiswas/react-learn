import './ExampleThree.scss';
import anime from "animejs";

export const ExampleThree = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <TypeOne />
      <TypeTwo />
    </div>
  )
}

export const TypeOne = () => {
  const numberOfBox = 25
  anime({
    targets: '.typeOne .el',
    scale: [
      { value: .1, easing: 'easeOutSine', duration: 500 },
      { value: 1, easing: 'easeInOutQuad', duration: 1200 }
    ],
    delay: anime.stagger(200, { grid: [5, 5], from: 'center' })
  });
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <div className="demo-content typeOne">
            <div className="grid" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {
                Array.from(Array(numberOfBox)).map((_, i: number) => {
                  return (
                    <div key={i} className="small square el" style={{ transform: 'scale(1)' }}></div>
                  )
                })
              }
            </div>
            <div className="grid shadow">
              {
                Array.from(Array(numberOfBox)).map((_, i: number) => {
                  return (
                    <div key={i} className="small square"></div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export const TypeTwo = () => {
  const numberOfBox = 25
  anime({
    targets: '.typeTwo .el',
    translateX: anime.stagger(10, { grid: [5, 5], from: 'center', axis: 'x' }),
    translateY: anime.stagger(10, { grid: [5, 5], from: 'center', axis: 'y' }),
    rotateZ: anime.stagger([0, 90], { grid: [5, 5], from: 'center', axis: 'x' }),
    delay: anime.stagger(200, { grid: [5, 5], from: 'center' }),
    easing: 'easeInOutQuad'
  });
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <div className="demo-content typeTwo">
            <div className="grid" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {
                Array.from(Array(numberOfBox)).map((_, i: number) => {
                  return (
                    <div key={i} className="small square el" style={{ transform: 'scale(1)' }}></div>
                  )
                })
              }
            </div>
            <div className="grid shadow">
              {
                Array.from(Array(numberOfBox)).map((_, i: number) => {
                  return (
                    <div key={i} className="small square"></div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div >
    </>
  )
}