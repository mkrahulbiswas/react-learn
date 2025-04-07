import anime from "animejs";

export const ExampleTwo = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <TypeOne />
    </div>
  )
}

export const TypeOne = () => {
  anime({
    targets: ['polygon', 'feTurbulence', 'feDisplacementMap'],
    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    baseFrequency: 0,
    scale: 1,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutExpo'
  });
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        <div className="exampleCommonContent svg-attributes-demo">
          <svg width="128" height="128" viewBox="0 0 128 128">
            <filter id="displacementFilter">
              <feTurbulence type="turbulence" baseFrequency="0.04921983229210848" numOctaves="2" result="turbulence" style={{ transform: "scale(1)" }}></feTurbulence>
              <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="14.781553041790373" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
            </filter>
            <polygon points="64 69.56621510280881 8.574 99.93758658336868 62.589812750651525 67.12327232364862 64 3.9375865833686783 65.41018724934848 67.12327232364862 119.426 99.93758658336868 " style={{ filter: "url(#displacementFilter)", transform: "scale(1)" }} fill="currentColor"></polygon>
          </svg>
        </div>
      </div>
    </div>
  )
}